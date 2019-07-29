import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/HttpService.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { UserModel } from '../user/user.model';
import { Urls } from '../common/URLs';

@Component({
    selector:'registration',
    templateUrl:'./registration.component.html',
    styleUrls:['./registration.component.css']
})

export class RegistrationComponent implements OnInit{

    user:UserModel = new UserModel();
    showRegistrationSuccess:Boolean = false;
    showRegistrationFailure:Boolean = false;

    constructor(private httpService:HttpService){
    }

    ngOnInit() {
    }
    registerVehical():void{
        console.log(this.user);
        this.httpService.post(Urls.REGISTER_VEHICLE, this.user).subscribe(
            response => {
                this.showRegistrationSuccess = true;

                this.user.vehicleNo = "";
                this.user.mobNo = "";
                this.user.licenseNo = "";
            }
            //response => this.employees = response,
          );
    }

}
