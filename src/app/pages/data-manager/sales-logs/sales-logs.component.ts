import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MasterService} from '../../../service/master.service';
import {parseString} from 'xml2js';

interface SaleLog {
  id: string;
  price: number;
  soldNum: number;
  revenue: number;
  sellDates: string[];
}


@Component({
  selector: 'app-sales-logs',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './sales-logs.component.html',
  styleUrl: './sales-logs.component.css'
})
export class SalesLogsComponent implements OnInit{
  projectorLogs: SaleLog[] = [];
  monitorLogs: SaleLog[] = [];
  televisionLogs: SaleLog[] = [];

  filteredSalesLog: SaleLog[] = [];
  searchTerm: string = '';

  masterSrv= inject(MasterService);

  ngOnInit(): void {
    this.masterSrv.getSalesLogs().subscribe((data: string) => {
      parseString(data, (err: any, result: any) => {
        if (err) {
          console.error('Failed to parse XML:', err);
          return;
        }

        const salesData = result.SalesLog;

        this.projectorLogs = this.mapSales(salesData.Projector ?? []);
        this.monitorLogs = this.mapSales(salesData.Monitor ?? []);
        this.televisionLogs = this.mapSales(salesData.Television ?? []);
      });
    });
  }

  private mapSales(items: any[]): SaleLog[] {
    return items.map((item: any) => {
      const sellDates: string[] = [];

      // Collect all fields that start with "sellDate"
      for (const key in item) {
        if (key.startsWith('sellDate') && Array.isArray(item[key])) {
          sellDates.push(item[key][0]);
        }
      }

      return {
        id: item.id[0],
        price: parseFloat(item.price[0]),
        soldNum: parseInt(item.soldNum[0], 10),
        revenue: parseFloat(item.revenue[0]),
        sellDates
      };
    });
  }

  // Filter logs based on the search term
  getFilteredMonitorLogs() {
    return this.monitorLogs.filter(log => log.id.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  getFilteredTelevisionLogs() {
    return this.televisionLogs.filter(log => log.id.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  getFilteredProjectorLogs() {
    return this.projectorLogs.filter(log => log.id.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
