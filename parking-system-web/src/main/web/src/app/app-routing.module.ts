import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardClientComponent } from './dashboad/client/dashboard.client.component';
import {ClientParkingBooking} from './booking/client/booking.client.component';
import {LoginClientComponent} from './login/client/login.client.component';
import {AdminComponent} from './booking/admin/admin.component';
import {RegistrationComponent} from './registration/registration.component';
import {HelpComponent} from './help/help.component';
import {UserComponent} from './user/user.component';
import { BarcodeScannerComponent } from './barcoadscanner/barcode.scanner.component';

const appRoutes: Routes = [
  { path: '', component: DashboardClientComponent, data: { title: 'Home' }},
  { path: 'dashboard-client', component: DashboardClientComponent, data: { title: 'Home' } },
  { path: 'booking', component: ClientParkingBooking, data: { title: 'Book Parking' } },
  {path:'admin', component:AdminComponent, data:{title:'Admin login'}},
  {path:'registration', component:RegistrationComponent, data:{title:'Register vehicle'}},
  {path:'help', component:HelpComponent, data:{title:'Help'}},
  {path:'user-profile',component:UserComponent,data:{title:'User Profile'}},
  {path:'barcodescanner',component:BarcodeScannerComponent,data:{title:'Barcode scanner'}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
 }
