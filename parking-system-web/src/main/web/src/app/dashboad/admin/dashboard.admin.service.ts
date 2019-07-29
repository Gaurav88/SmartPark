import { Injectable } from "@angular/core";
import {HttpService} from "../../common/HttpService.service";
import { BookingModel } from '../../model/booking.model';
import {Urls} from "../../common/URLs";

@Injectable({
    providedIn:"root",
})

export class DashboardAdminService{

    constructor(private httpService:HttpService){}
    
    getParkingSlots(){
        return this.httpService.get(Urls.ADMIN_DOUGHNUT_CHART);
    }
}