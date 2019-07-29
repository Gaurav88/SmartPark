import { Injectable } from "@angular/core";
import {HttpService} from "../../common/HttpService.service";
import { BookingModel } from '../../model/booking.model';
import {Urls} from "../../common/URLs";

@Injectable({
    providedIn:"root",
})

export class DashboardClientService{

    constructor(private httpService:HttpService){}
    
    getCurrentBookings(){
        var userId = 1;
        return this.httpService.get(Urls.CURRENT_SUMMARY+userId);
    }

    cancelBookings(booking){
        return this.httpService.get(Urls.CANCEL_BOOKING+ booking.bookingId);
    }
}