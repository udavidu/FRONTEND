import {Component, inject} from '@angular/core';
import {MasterService} from '../../../service/master.service';
import {FormsModule, NgForm} from '@angular/forms'
import {CommonModule, NgIf} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-devices-management',
  imports: [RouterModule, CommonModule, FormsModule, NgIf],
  templateUrl: './devices-management.component.html',
  styleUrl: './devices-management.component.css'
})
export class DevicesManagementComponent {
  productType: string = '';
  id: string = '';
  showConfirmation: boolean = false;
  actionType: 'delete' | 'sell' = 'sell'; // To differentiate between delete and sell actions

  masterSrv= inject(MasterService);

  // Method to show confirmation dialog based on action type
  confirmAction(action: 'delete' | 'sell') {
    this.actionType = action;
    this.showConfirmation = true;
  }

  // Handling the form submission
  onConfirm(form: NgForm) {
    if (this.actionType === 'delete') {
      this.masterSrv.deleteProduct(this.productType, this.id).subscribe(
        response => {
          alert(response);
          this.showConfirmation = false;
          form.resetForm();
        },
        error => {
          alert("Error while deleting device.");
          this.showConfirmation = false;
        }
      );
    } else if (this.actionType === 'sell') {
      this.masterSrv.sellDevice(this.productType, this.id).subscribe(
        response => {
          alert(response);
          this.showConfirmation = false;
          form.resetForm();
        },
        error => {
          alert("Error while selling device.");
          this.showConfirmation = false;
        }
      );
    }
  }

  // Handling cancellation of the confirmation dialog
  onCancel() {
    this.showConfirmation = false;
  }
}

