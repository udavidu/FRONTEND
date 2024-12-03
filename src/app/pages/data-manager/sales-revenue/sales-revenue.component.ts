import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MasterService} from '../../../service/master.service';
import {parseString} from 'xml2js';
import {FormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sales-revenue',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './sales-revenue.component.html',
  styleUrl: './sales-revenue.component.css'
})
export class SalesRevenueComponent implements OnInit{
  salesRevenue: any = { ProductProfit: [] };
  startDate!: string;
  endDate!: string;
  revenueData: any[] = [];
  totalRevenue: string = '';
  dateRangeMessage: string = '';
  searchId: string = '';



  masterSrv= inject(MasterService);

  ngOnInit() {
    this.masterSrv.getSalesRevenue().subscribe(
      (response) => {
        parseString(response, { explicitArray: false }, (err, result) => {
          if (err) {
            alert('Error while fetching sales revenue.');
          } else {
            this.salesRevenue = result.ArrayOfProductProfit || { ProductProfit: [] };
          }
        });
      },
      (error) => {
        alert('Error while fetching sales revenue.');
      }
    );
  }

  fetchRevenue() {
    if (!this.startDate || !this.endDate) {
      alert('Both start and end dates must be provided.');
      return;
    }

    // Transform dates to MM-dd-yyyy format
    const datePipe = new DatePipe('en-US');
    const formattedStartDate = datePipe.transform(this.startDate, 'MM-dd-yyyy');
    const formattedEndDate = datePipe.transform(this.endDate, 'MM-dd-yyyy');

    console.log('Fetching revenue for:', formattedStartDate, formattedEndDate);

    // Call the service with formatted dates
    this.masterSrv.calculateRevenueByDate(formattedStartDate!, formattedEndDate!).subscribe({
      next: (response) => {
        console.log('Response received:', response);
        this.processRevenueData(response);
        this.updateDateRangeMessage();
      },
      error: (error) => {
        console.error('Error fetching revenue data:', error);
        alert('An error occurred while fetching revenue data.');
      },
    });
  }


  onDateChange(): void {
    if (this.startDate && this.endDate) {
      console.log(`Date changed - Start Date: ${this.startDate}, End Date: ${this.endDate}`);
      this.fetchRevenue();
    }
  }

  private updateDateRangeMessage(): void {
    this.dateRangeMessage = `Records from ${this.startDate} to ${this.endDate}`;
  }

  private processRevenueData(response: any) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, 'text/xml');

    this.revenueData = []; // Clear previous data
    const types = ['Monitor', 'Television', 'Projector'];

    types.forEach((type) => {
      const items = xmlDoc.getElementsByTagName(type);
      for (let i = 0; i < items.length; i++) {
        const id = items[i].getElementsByTagName('id')[0]?.textContent || '';
        const number = items[i].getElementsByTagName('count')[0]?.textContent || '';
        const revenue = items[i].getElementsByTagName('revenue')[0]?.textContent || '';
        const price = items[i].getElementsByTagName('price')[0]?.textContent || ''; // Fetching price

        // Push the data including price to revenueData array
        this.revenueData.push({ type, id, number, revenue, price });
      }
    });

    this.totalRevenue = xmlDoc.getElementsByTagName('TotalRevenue')[0]?.textContent || '';
  }

  // Method to filter data by ID
  get filteredRevenueData() {
    if (!this.searchId) {
      return this.revenueData;
    }
    return this.revenueData.filter(item => item.id.includes(this.searchId));
  }


}
