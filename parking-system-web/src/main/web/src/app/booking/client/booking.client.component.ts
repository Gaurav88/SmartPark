import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/common/HttpService.service';
import {Urls} from '../../common/URLs';
import {Router} from '@angular/router';

@Component({
    selector:'booking-client',
    templateUrl:'./booking.client.component.html',
    styleUrls:['./booking.client.component.css']
})

export class ClientParkingBooking implements OnInit{
    shiftTimings = []//[{"timeSlots":"9:30","countOfSlots":"5"}];
    message:String="";
    alert:boolean=false;
        constructor(private httpService:HttpService, private router:Router){

        }
    ngOnInit() {
        this.getAllBookings();
    }

    getAllBookings():void{
        this.httpService.get(Urls.Count_SLOTS_URL).subscribe(
            data=>{
                this.shiftTimings=data;
            }
          );
    }

    bookParking(slotData) {
        slotData.userId = 1;

        this.httpService.post(Urls.BOOKING_URL, slotData).subscribe(data=>{
            this.message=data.message;
            if(data.message=="Success"){
                this.router.navigate(['/dashboard-client']);
            }else{
                this.alert=true;
            }
        });
    }

}
