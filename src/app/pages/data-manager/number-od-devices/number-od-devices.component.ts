import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MasterService } from '../../../service/master.service';
import { parseString } from 'xml2js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-od-devices',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './number-od-devices.component.html',
  styleUrls: ['./number-od-devices.component.css']
})
export class NumberOdDevicesComponent implements OnInit {
  deviceCounts: any;
  counterData: any[] = [];
  dateRangeMessage: string = '';

  startDate: string = '';
  endDate: string = '';

  stockData: any[] = [];
  filteredStockData: any[] = [];
  totalRemainingStocks: any = {};
  summaryData: any = {}; // New property to hold the summary
  searchTerm: string = '';

  masterSrv = inject(MasterService);

  ngOnInit() {
    this.masterSrv.countDevice().subscribe(
      response => {
        parseString(response, { explicitArray: false }, (err, result) => {
          if (err) {
            alert('Error while fetching device counts.');
          } else {
            this.deviceCounts = result.ArrayOfProductCount;
          }
        });
      },
      error => {
        alert('Error while fetching device counts.');
      }
    );
  }

  // Fetch Counter by date range
  fetchCounter() {
    if (!this.startDate || !this.endDate) {
      return;
    }

    const formattedStartDate = this.convertDateFormat(this.startDate);
    const formattedEndDate = this.convertDateFormat(this.endDate);

    this.masterSrv.countDeviceByDate(formattedStartDate, formattedEndDate).subscribe({
      next: (response) => {
        this.processCounter(response);
        this.fetchStockInformation(formattedStartDate, formattedEndDate);
        this.updateDateRangeMessage();
      },
      error: (error) => {
        console.error("Error while fetching data: ", error);
        alert("An error occurred while fetching revenue data.");
      }
    });
  }

  //TEST Commit
  onDataChange(): void {
    this.fetchCounter();
  }

  private updateDateRangeMessage(): void {
    this.dateRangeMessage = `Records from ${this.startDate} to ${this.endDate}`;
  }

  private processCounter(response: any) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, 'text/xml');

    this.counterData = [];
    const types = ['Monitor', 'Television', 'Projector'];

    types.forEach((type) => {
      const items = xmlDoc.getElementsByTagName(type);
      for (let i = 0; i < items.length; i++) {
        const id = items[i].getElementsByTagName('id')[0]?.textContent || '';
        const revenue = items[i].getElementsByTagName('revenue')[0]?.textContent || '';
        const price = items[i].getElementsByTagName('price')[0]?.textContent || '';

        this.counterData.push({ type, id, revenue, price });
      }
    });
  }

  private fetchStockInformation(startDate: string, endDate: string) {
    this.masterSrv.getStockInformationByDateRange(startDate, endDate).subscribe((response: any) => {
      this.parseXmlData(response);
    });
  }

  private parseXmlData(xml: string) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'application/xml');
    const soldProductsInfo = xmlDoc.querySelector('SoldProductsInfo');
    this.stockData = [];

    // Extracting data for each product type (Monitor, Projector, Television)
    ['Monitor', 'Television', 'Projector'].forEach((productType) => {
      const products = soldProductsInfo?.querySelectorAll(productType);

      products?.forEach((product: any) => {
        const id = product.querySelector('id')?.textContent;
        const productType = product.querySelector('productType')?.textContent;
        const price = product.querySelector('price')?.textContent;
        const soldNum = product.querySelector('soldNum')?.textContent;
        const revenue = product.querySelector('revenue')?.textContent;
        const brand = product.querySelector('brand')?.textContent;
        const model = product.querySelector('model')?.textContent;
        const stockDate = product.querySelector('stockDate')?.textContent;
        const totalOnStock = product.querySelector('totalOnStock')?.textContent;
        const soldCount = product.querySelector('soldCount')?.textContent;
        const remaining = product.querySelector('remaining')?.textContent;
        const stockFromDate = product.querySelector('stockFromDate')?.textContent;
        const totalRemainsExists = product.querySelector('remains')?.textContent;
        const stockToEndDate = product.querySelector('stockToEndDate')?.textContent;

        // Store the extracted data
        this.stockData.push({
          id,
          productType,
          price,
          soldNum,
          revenue,
          brand,
          model,
          stockDate,
          totalOnStock,
          soldCount,
          remaining,
          stockFromDate,
          totalRemainsExists,
          stockToEndDate
        });
      });
    });

    // Filtered stock data
    this.filteredStockData = [...this.stockData];
    this.totalRemainingStocks = this.getTotalRemainingStocks(this.stockData);
    this.extractSummaryData(xmlDoc);
  }

  private getTotalRemainingStocks(stockData: any[]) {
    return stockData.reduce((acc, product) => {
      const productType = product.productType;
      if (!acc[productType]) {
        acc[productType] = 0;
      }
      acc[productType] += parseInt(product.remaining, 10);
      return acc;
    }, {});
  }

  private extractSummaryData(xmlDoc: any) {
    const summary = xmlDoc.querySelector('Summary');
    this.summaryData = {
      periodMonitorSum: summary?.querySelector('PeriodMonitorSum')?.textContent || '0',
      periodTelevisionSum: summary?.querySelector('PeriodTelevisionSum')?.textContent || '0',
      periodProjectorSum: summary?.querySelector('PeriodProjectorSum')?.textContent || '0',
      totalPeriodSum: summary?.querySelector('TotalPeriodSum')?.textContent || '0',

      initialMonitorStock: summary?.querySelector('InitialMonitorStock')?.textContent || '0',
      initialTelevisionStock: summary?.querySelector('InitialTelevisionStock')?.textContent || '0',
      initialProjectorStock: summary?.querySelector('InitialProjectorStock')?.textContent || '0',
      totalInitialStock: summary?.querySelector('TotalInitialStock')?.textContent || '0',

      currentMonitorStock: summary?.querySelector('CurrentMonitorStock')?.textContent || '0',
      currentTelevisionStock: summary?.querySelector('CurrentTelevisionStock')?.textContent || '0',
      currentProjectorStock: summary?.querySelector('CurrentProjectorStock')?.textContent || '0',
      currentTotalStock: summary?.querySelector('CurrentTotalStock')?.textContent || '0',

      startMonitor: summary?.querySelector('StockFromStartMonitor')?.textContent || '0',
      startTelevision: summary?.querySelector('StockFromStartTelevision')?.textContent || '0',
      startProjector: summary?.querySelector('StockFromStartProjector')?.textContent || '0',

      endMonitor: summary?.querySelector('StockToEndMonitor')?.textContent || '0',
      endTelevision: summary?.querySelector('StockToEndTelevision')?.textContent || '0',
      endProjector: summary?.querySelector('StockToEndProjector')?.textContent || '0',

      stockFromStart: summary?.querySelector('TotalStockFromStart')?.textContent || '0',
      stockToEnd: summary?.querySelector('TotalStockToEnd')?.textContent || '0',
    };
  }

  // Filter based on search term
  onSearchChange(): void {
    const searchTermLower = this.searchTerm.toLowerCase();

    if (this.searchTerm === '') {
      this.filteredStockData = [...this.stockData];
      this.totalRemainingStocks = this.getTotalRemainingStocks(this.stockData);
    } else {
      this.filteredStockData = this.stockData.filter((product) =>
        product.id?.toLowerCase().includes(searchTermLower) ||
        product.model?.toLowerCase().includes(searchTermLower) ||
        product.productType?.toLowerCase().includes(searchTermLower)
      );

      this.totalRemainingStocks = {
        Monitor: this.filterSummaryData('Monitor', searchTermLower),
        Television: this.filterSummaryData('Television', searchTermLower),
        Projector: this.filterSummaryData('Projector', searchTermLower)
      };
    }
  }

  private filterSummaryData(productType: string, searchTerm: string) {
    return this.totalRemainingStocks[productType]?.filter((model: any) =>
      model['id']?.toLowerCase().includes(searchTerm) ||
      model['model']?.toLowerCase().includes(searchTerm)
    );
  }

  // Helper method to convert date format from yyyy-mm-dd to mm-dd-yyyy
  private convertDateFormat(date: string): string {
    const [year, month, day] = date.split('-');
    return `${month}-${day}-${year}`;
  }
}
