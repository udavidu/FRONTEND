import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private monitorUrl = 'http://localhost:51834/WebService.asmx/GetMonitors';
  private televisionsUrl = 'http://localhost:51834/WebService.asmx/GetTelevision';
  private projectorsUrl = 'http://localhost:51834/WebService.asmx/GetProjector';

  private addNewDeviceUrl = 'http://localhost:51834/WebService.asmx/AddProduct';
  private deleteDeviceUrl = 'http://localhost:51834/WebService.asmx/DeleteProduct';
  private sellDeviceUrl = 'http://localhost:51834/WebService.asmx/SellProducts';
  private editDeviceUrl = 'http://localhost:51834/WebService.asmx/EditDevice';

  private countDevicesUrl = 'http://localhost:51834/WebService.asmx/CountDevices';
  private countDeviceByDateUrl = 'http://localhost:51834/WebService.asmx/GetStockInformation_StartDateToEndDate';
  private countDeviceByDateDetailTech1 = 'http://localhost:51834/WebService.asmx/GetStockInformation_StartDateToEndDate_1';
  private countDeviceByDateDetailTech2 = 'http://localhost:51834/WebService.asmx/GetStockInformation_StartDateToEndDate_2';

  //private countModel = 'http://localhost:51834/WebService.asmx/GetModelCounts';
  // Sales Revenue
  private salesRevenueUrl = 'http://localhost:51834/WebService.asmx/SalesRevenue';
  //Sales Revenue By Date
  private salesRevenueByDateUrl = 'http://localhost:51834/WebService.asmx/CalculateRevenueByDate';
  //Display Sales Logs
  private salesLogsUrl = 'http://localhost:51834/WebService.asmx/DisplaySalesLogs';
  // Display Filter
  private filterDeviceUrl = 'http://localhost:51834/WebService.asmx/GetFilteredProducts';
  // Read All XML
  private getAll = 'http://localhost:51834/WebService.asmx/ReadXML';

  constructor(private http: HttpClient) { }

  getMonitors(): Observable<any> { return this.http.post(this.monitorUrl, null, { responseType: 'text' }); }
  getTelevisions(): Observable<any> { return this.http.post(this.televisionsUrl, null, { responseType: 'text' }); }
  getProjectors(): Observable<any> { return this.http.post(this.projectorsUrl, null, { responseType: 'text' }); }

  deleteProduct(productType: string, id: string): Observable<any> { return this.http.post<string>(this.deleteDeviceUrl, { productType, id }); }
  sellDevice(productType: string, id: string): Observable<any> { return this.http.post(this.sellDeviceUrl, { productType, id }); }

  addNewDevice(productType: string, brand: string, model: string, displaySize: string, refreshRate: string, displayTech: string, maxResolutions: string,
               connections: string, output: string, speaker: string, smart: string, os: string, bluetooth: string, wirelessConnections: string,
               productionYear: number, vesa: string, color: string, price: number, stockDate: Date, pixelResolutions: string, stock: number
  ): Observable<any> { return this.http.post(this.addNewDeviceUrl, { productType, brand, model, displaySize, refreshRate, displayTech, maxResolutions,
    connections, output, speaker, smart, os, bluetooth, wirelessConnections, productionYear, vesa, color, price, stockDate, pixelResolutions, stock
  }); }

  editDevice(id: string, productType: string, brand: string, displaySize: string, refreshRate: string, displayTech: string, maxResolutions: string, stock: string,
             pixelResolutions: string, connections: string, output: string, speaker: string, smart: string, os: string, bluetooth: string, wirelessConnections: string,
             productionYear: string, VESA: string, color: string, price: string, stockDate: string): Observable<any> {
    return this.http.post(this.editDeviceUrl, {id, productType, brand, displaySize, refreshRate, displayTech, maxResolutions, stock, pixelResolutions, connections,
      output, speaker, smart, os, bluetooth, wirelessConnections, productionYear, VESA, color, price, stockDate});
  }

  getSalesLogs(): Observable<any> { return this.http.post(this.salesLogsUrl, null, { responseType: 'text' }); }
  getSalesRevenue(): Observable<any> { return this.http.post(this.salesRevenueUrl, null, { responseType: 'text' }); }
  calculateRevenueByDate(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.salesRevenueByDateUrl, body, { headers, responseType: 'text' });
  }

  countDevice(): Observable<any> { return this.http.post(this.countDevicesUrl, null, { responseType: 'text' }); }
  countDeviceByDate(startDate: string, endDate: string): Observable<string>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateUrl, body, { headers, responseType: 'text' });
  }

  getStockInformationByDateRange(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateUrl, body, { headers, responseType: 'text' });
  }

  getFilteredProducts(params: any): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `productType=${encodeURIComponent(params.productType)}&` +
      `displaySize=${encodeURIComponent(params.displaySize)}&` +
      `brand=${encodeURIComponent(params.brand)}&` +
      `maxResolutions=${encodeURIComponent(params.maxResolutions)}&` +
      `stockDate=${encodeURIComponent(params.stockDate)}&` +
      `sortByPrice=${encodeURIComponent(params.sortByPrice)}`;
    return this.http.post(this.filterDeviceUrl, body, { headers, responseType: 'text' });
  }

  getStockInformationByDateRangeTechInf1(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateDetailTech1, body, { headers, responseType: 'text' });
  }

  getStockInformationByDateRangeTechInf2(startDate: string, endDate: string): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
    return this.http.post(this.countDeviceByDateDetailTech2, body, { headers, responseType: 'text' });
  }
}
