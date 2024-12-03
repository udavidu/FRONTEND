import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MasterService} from '../../../service/master.service';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-comparision',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './product-comparision.component.html',
  styleUrl: './product-comparision.component.css'
})
export class ProductComparisionComponent {
  productType: string = '';
  displaySize: string = '';
  brand: string = '';
  maxResolutions: string = '';
  stockDate: string = '';
  sortByPrice: string = 'true'; // Default value can be adjusted as needed
  filteredProducts: any[] = [];
  allProducts: any[] = [];
  //animations
  showDisplayInfo: boolean = true;
  showConnectivity: boolean = true;
  showAdditionalInfo: boolean = true;

  masterSrv= inject(MasterService);

  onSubmit(form: NgForm) {

  }

  onFilterChange() {
    const params = {
      productType: this.productType,
      displaySize: this.displaySize,
      brand: this.brand,
      maxResolutions: this.maxResolutions,
      stockDate: this.stockDate,
      sortByPrice: this.sortByPrice
    };

    this.masterSrv.getFilteredProducts(params).subscribe({
      next: (response) => {
        this.processFilteredProducts(response);
      },
      error: (error) => {
        console.error('Error fetching filtered products:', error);
      }
    });
  }

  private processFilteredProducts(response: string) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, 'text/xml');
    const products = xmlDoc.getElementsByTagName('Products')[0]?.children || [];

    this.filteredProducts = Array.from(products).map(product => ({
      type: product.tagName,
      id: product.getElementsByTagName('id')[0]?.textContent || '',
      Brand: product.getElementsByTagName('Brand')[0]?.textContent || '',

      DisplaySize: product.getElementsByTagName('DisplaySize')[0]?.textContent || '',
      RefreshRate: product.getElementsByTagName('Price')[0]?.textContent || '',
      DisplayTech: product.getElementsByTagName('DisplayTech')[0]?.textContent || '',
      MaxResolutions: product.getElementsByTagName('MaxResolutions')[0]?.textContent || '',

      Output: product.getElementsByTagName('Output')[0]?.textContent || '',
      Speaker: product.getElementsByTagName('Speaker')[0]?.textContent || '',
      WirelessConnections: product.getElementsByTagName('WirelessConnections')[0]?.textContent || '',
      Bluetooth: product.getElementsByTagName('Bluetooth')[0]?.textContent || '',
      Connections: product.getElementsByTagName('Connections')[0]?.textContent || '',
      Smart: product.getElementsByTagName('Smart')[0]?.textContent || '',
      OS: product.getElementsByTagName('OS')[0]?.textContent || '',
      VESA: product.getElementsByTagName('VESA')[0]?.textContent || '',

      Color: product.getElementsByTagName('Color')[0]?.textContent || '',
      ProductionYear: product.getElementsByTagName('ProductionYear')[0]?.textContent || '',
      StockDate: product.getElementsByTagName('StockDate')[0]?.textContent || '',
      Stock: product.getElementsByTagName('Stock')[0]?.textContent || '',
      Sold: product.getElementsByTagName('Sold')[0]?.textContent || '',
      Price: product.getElementsByTagName('Price')[0]?.textContent || '',
      Profit: product.getElementsByTagName('Profit')[0]?.textContent || '',
    }));
  }

  toggleDisplayInfo(): void {
    this.showDisplayInfo = !this.showDisplayInfo;
  }

  toggleConnectivity(): void {
    this.showConnectivity = !this.showConnectivity;
  }

  toggleAdditionalInfo(): void {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

  getAnimationClass(section: string): string {
    switch (section) {
      case 'display':
        return this.showDisplayInfo ? 'slide-down' : 'slide-up';
      case 'connectivity':
        return this.showConnectivity ? 'slide-down' : 'slide-up';
      case 'additional':
        return this.showAdditionalInfo ? 'slide-down' : 'slide-up';
      default:
        return '';
    }
  }

}
