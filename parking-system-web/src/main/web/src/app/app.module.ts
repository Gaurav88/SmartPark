import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardClientComponent} from './dashboad/client/dashboard.client.component';
import {ClientParkingBooking} from './booking/client/booking.client.component';
import {LoginClientComponent} from './login/client/login.client.component';
import {LoginAdminComponent} from './login/admin/login.admin.component';
import {RegistrationComponent} from './registration/registration.component';
import {HelpComponent} from './help/help.component';
import {AdminComponent} from './booking/admin/admin.component';
import {UserComponent} from './user/user.component';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import {BarcodeScannerComponent} from './barcoadscanner/barcode.scanner.component';

import {
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule
    }
 from '@angular/material';   
 
 import {FlexLayoutModule} from '@angular/flex-layout';

 import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        DashboardClientComponent,
        ClientParkingBooking,
        LoginClientComponent,
        LoginAdminComponent,
        RegistrationComponent,
        HelpComponent,
        AdminComponent,
        UserComponent,
        BarcodeScannerComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        CdkTableModule,
        FlexLayoutModule,
        MatExpansionModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        Ng2SearchPipeModule,
        BarecodeScannerLivestreamModule
      ],
      providers: [],
      bootstrap: [AppComponent],
      exports:[
          AppComponent,
          SidenavComponent
        ]
    })
  
  export class AppModule { }