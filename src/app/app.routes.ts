import {Routes} from '@angular/router';
import {GetMonitorsComponent} from './pages/functionality/get-monitors/get-monitors.component';
import {GetProjectorsComponent} from './pages/functionality/get-projectors/get-projectors.component';
import {GetTelevisionsComponent} from './pages/functionality/get-televisions/get-televisions.component';
import {DevicesManagementComponent} from './pages/functionality/devices-management/devices-management.component';
import {AddDevicesComponent} from './pages/functionality/add-devices/add-devices.component';
import {EditDevicesComponent} from './pages/functionality/edit-devices/edit-devices.component';
import {SalesLogsComponent} from './pages/data-manager/sales-logs/sales-logs.component';
import {SalesRevenueComponent} from './pages/data-manager/sales-revenue/sales-revenue.component';
import {NumberOdDevicesComponent} from './pages/data-manager/number-od-devices/number-od-devices.component';
import {ProductComparisionComponent} from './pages/functionality/product-comparision/product-comparision.component';
import {
  NumberOdDevicesTechInformationComponent
} from './pages/data-manager/number-od-devices-tech-information/number-od-devices-tech-information.component';


export const routes: Routes = [

  { path: 'get-monitors', component: GetMonitorsComponent },
  { path: 'get-projectors', component: GetProjectorsComponent },
  { path: 'get-televisions', component: GetTelevisionsComponent },

  { path: 'device-management', component: DevicesManagementComponent},
  { path: 'add-devices', component: AddDevicesComponent},
  { path: 'edit-devices', component: EditDevicesComponent},

  { path: 'sales-logs', component: SalesLogsComponent},
  { path: 'sales-revenue', component: SalesRevenueComponent},

  { path: 'number-of-devices', component: NumberOdDevicesComponent},
  { path: 'product-comparision', component: ProductComparisionComponent},

  { path: 'number-od-devices-tech-inf', component: NumberOdDevicesTechInformationComponent},

  { path: '', redirectTo: 'get-monitors', pathMatch: 'full' }
];

