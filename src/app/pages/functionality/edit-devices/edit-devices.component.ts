import {Component, inject} from '@angular/core';
import {MasterService} from '../../../service/master.service';
import {FormsModule, NgForm} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-edit-devices',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './edit-devices.component.html',
  styleUrl: './edit-devices.component.css'
})
export class EditDevicesComponent {
  id: string = '';
  productType: string = '';
  brand: string = '';
  displaySize: string = '';
  refreshRate: string = '';
  displayTech: string = '';
  maxResolutions: string = '';
  stock: string = '';
  pixelResolutions: string = '';
  connections: string = '';
  output: string = '';
  speaker: string = '';
  smart: string = '';
  os: string = '';
  bluetooth: string = '';
  wirelessConnections: string = '';
  productionYear: string = '';
  VESA: string = '';
  color: string = '';
  price: string = '';
  stockDate: string = '';

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

  confirmEdit() {
    this.showConfirmation = true;
  }

  onProductTypeChange() {
    this.filteredDisplayTechOptions = this.displayTechnologyOptions[this.productType] || [];
    this.filteredResolutionsOptions = this.displayResolutionsOptions[this.productType] || [];
    this.displayTech = '';
    this.maxResolutions = '';
  }

  onConfirm(form: NgForm) {
    this.masterSrv.editDevice(
      this.id, this.productType, this.brand, this.displaySize, this.refreshRate, this.displayTech,
      this.maxResolutions, this.stock, this.pixelResolutions, this.connections, this.output,
      this.speaker, this.smart, this.os, this.bluetooth, this.wirelessConnections, this.productionYear,
      this.VESA, this.color, this.price, this.stockDate
    ).subscribe (
      response => {
        alert(response);
        this.showConfirmation = false;
        form.resetForm();
      },
      error => {
        alert("Error while editing device.");
        this.showConfirmation = false;
      }
    );
  }
  onCancel() {
    this.showConfirmation = false;
  }
}
