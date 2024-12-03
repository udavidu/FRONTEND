import {Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MasterService} from '../../../service/master.service';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-devices',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-devices.component.html',
  styleUrl: './add-devices.component.css'
})
export class AddDevicesComponent {
  productType: string = '';
  brand: string = '';
  model: string = '';
  displaySize: string = '';
  refreshRate: string = '';
  displayTech: string = '';
  maxResolutions: string = '';
  connections: string = '';
  output: string = '';
  speaker: string = '';
  os: string = '';
  smart: string = '';
  bluetooth: string = '';
  wirelessConnections: string = '';
  productionYear!: number;
  vesa: string = '';
  color: string = '';
  price!: number;
  stockDate!: Date;
  pixelResolutions: string = '';
  stock!: number;
  showConfirmation: boolean = false;

  displayTechnologyOptions: { [key: string]: string[] } = {
    "Monitor": ["LCD", "OLED"],
    "Television": ["LCD", "OLED", "QLED", "NanoCell", "QNED"],
    "Projector": ["DLP", "LCD", "LCoS"]
  };

  displayResolutionsOptions: { [key: string]: string[] } = {
    "Monitor": ["HD Ready", "Full HD", "Quad HD", "Dual Quad HD", "4K", "5K", "6K", "8K", "Ultra Wide FHD", "Ultra Wide QHD"],
    "Television": ["HD Ready", "Full HD", "4K Ultra HD", "Ultra HD 8K"],
    "Projector": ["SVGA", "XGA", "WXGA","HD Ready", "Full HD","WUXGA", "4K Ultra HD"]
  }

  filteredDisplayTechOptions: string[] = [];
  filteredResolutionsOptions: string[] = [];

  masterSrv= inject(MasterService);

  confirmAdd() {
    this.showConfirmation = true;
  }


  onProductTypeChange() {
    this.filteredDisplayTechOptions = this.displayTechnologyOptions[this.productType] || [];
    this.filteredResolutionsOptions = this.displayResolutionsOptions[this.productType] || [];
    this.displayTech = '';
    this.maxResolutions = '';
  }

  onConfirm(form: NgForm) {
    this.masterSrv.addNewDevice(
      this.productType, this.brand, this.model, this.displaySize, this.refreshRate,
      this.displayTech, this.maxResolutions, this.connections, this.output, this.speaker, this.smart,
      this.os, this.bluetooth, this.wirelessConnections, this.productionYear, this.vesa,
      this.color, this.price, this.stockDate, this.pixelResolutions, this.stock
    ).subscribe(
      response => {
        alert(response);
        this.showConfirmation = false;
        form.resetForm();
      },
      error => {
        console.log("Production Year:", this.productionYear);
        alert("Error while adding new device.");
        this.showConfirmation = false;
      }
    );
  }
  onCancel() {
    this.showConfirmation = false;
  }
}
