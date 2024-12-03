import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MasterService } from '../../../service/master.service';
import { map } from 'rxjs';
import { parseString } from 'xml2js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-od-devices-tech-information',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './number-od-devices-tech-information.component.html',
  styleUrl: './number-od-devices-tech-information.component.css',
  providers: [DatePipe] // Add DatePipe here
})
export class NumberOdDevicesTechInformationComponent implements OnInit {
  stockData: any[] = [];
  startDate: string = '';
  endDate: string = '';
  summary: any = [];
  errorMessage: string = '';
  summaryData: any[] = [];

  private datePipe = inject(DatePipe);
  private masterSrv = inject(MasterService);

  fetchData(): void {
    if (this.startDate && this.endDate) {
      const formattedStartDate = this.datePipe.transform(this.startDate, 'MM-dd-yyyy');
      const formattedEndDate = this.datePipe.transform(this.endDate, 'MM-dd-yyyy');

      this.masterSrv.getStockInformationByDateRangeTechInf2(formattedStartDate!, formattedEndDate!)
        .subscribe(
          (data) => {
            this.summary = this.parseXmlData(data);
          },
          (error) => {
            console.error('Error fetching data', error);
          }
        );
    } else {
      console.error('Start date or end date is not selected.');
    }
  }

  ngOnInit(): void {
    if (this.startDate && this.endDate) {
      this.onDateChange();
    }
  }

  getStockData(): void {
    const formattedStartDate = this.datePipe.transform(this.startDate, 'MM-dd-yyyy');
    const formattedEndDate = this.datePipe.transform(this.endDate, 'MM-dd-yyyy');

    this.masterSrv.getStockInformationByDateRangeTechInf2(formattedStartDate!, formattedEndDate!)
      .subscribe({
        next: (response) => {
          parseString(response, (err, result) => {
            if (!err) {
              this.summaryData = result.SoldProductsInfo.Summary[0].Brand;
            } else {
              console.error('Error parsing XML:', err);
            }
          });
        },
        error: (error) => console.error('Error fetching data:', error)
      });
  }

  fetchStockData(): void {
    const formattedStartDate = this.datePipe.transform(this.startDate, 'MM-dd-yyyy');
    const formattedEndDate = this.datePipe.transform(this.endDate, 'MM-dd-yyyy');

    this.masterSrv.getStockInformationByDateRangeTechInf1(formattedStartDate!, formattedEndDate!).pipe(
      map((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'application/xml');
        const products = Array.from(xmlDoc.getElementsByTagName('Monitor'))
          .concat(Array.from(xmlDoc.getElementsByTagName('Television')))
          .concat(Array.from(xmlDoc.getElementsByTagName('Projector')));

        return products.map((product: any) => {
          const obj: any = {};
          Array.from(product.childNodes).forEach((node: any) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              obj[node.nodeName] = node.textContent;
            }
          });
          return obj;
        });
      })
    ).subscribe({
      next: (data) => {
        this.stockData = data;
      },
      error: (err) => {
        this.errorMessage = `Error: ${err}`;
      },
    });
  }

  parseXmlData(xmlData: string): any[] {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
    const productsInfo = xmlDoc.getElementsByTagName('Brand');
    let summary = [];

    for (let i = 0; i < productsInfo.length; i++) {
      const brandName = productsInfo[i].getElementsByTagName('brandName')[0]?.textContent || '';
      const models = productsInfo[i].getElementsByTagName('Model');
      let brandModels = [];
      for (let j = 0; j < models.length; j++) {
        const modelName = models[j].getElementsByTagName('modelName')[0]?.textContent || '';
        const totalStock = models[j].getElementsByTagName('totalStock')[0]?.textContent || '';
        const totalSold = models[j].getElementsByTagName('totalSold')[0]?.textContent || '';
        const remaining = models[j].getElementsByTagName('remaining')[0]?.textContent || '';

        // Replace comma with a dot for proper number conversion
        const sanitizedTotalStock = parseFloat(totalStock.replace(',', '.'));
        const sanitizedTotalSold = parseFloat(totalSold.replace(',', '.'));
        const sanitizedRemaining = parseFloat(remaining.replace(',', '.'));

        brandModels.push({
          modelName,
          totalStock: sanitizedTotalStock,
          totalSold: sanitizedTotalSold,
          remaining: sanitizedRemaining,
        });
      }
      summary.push({
        brandName,
        models: brandModels
      });
    }
    return summary;
  }


  onDateChange(): void {
    if (this.startDate && this.endDate) {
      this.errorMessage = '';
      this.fetchStockData();
      this.getStockData();
      this.fetchData();
    } else {
      this.errorMessage = 'Both start date and end date are required.';
    }
  }
}
