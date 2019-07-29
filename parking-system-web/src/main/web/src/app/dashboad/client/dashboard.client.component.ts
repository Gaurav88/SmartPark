import { Component, OnInit } from '@angular/core';
import { DashboardClientService } from './dashboard.client.service';
import { BookingModel } from 'src/app/model/booking.model';
import {Router} from '@angular/router';

@Component({
    selector:'dashboard-client',
    templateUrl:'./dashboard.client.component.html',
    styleUrls:['./dashboard.client.component.css']
})

export class DashboardClientComponent implements OnInit{

    isCurrentBooking:boolean=false;
    message:String="";

    booking:BookingModel;
    constructor(private service:DashboardClientService,private router:Router){
        
    }

    ngOnInit(){
        // this.booking=this.service.getCurrentBookings();
        this.service.getCurrentBookings().subscribe(data=>{
            this.booking = data;
            this.isCurrentBooking = this.booking.bookingId!="0"?true:false;
        })
        
    }

    cancelBooking(booking) {

        this.service.cancelBookings(booking).subscribe(
            data=>{
                if(data.message=="Success"){
                    this.isCurrentBooking =false;
                }else{
                    this.message="warning";
                }
        });
    }

    bookNew(){
        this.router.navigate(['/booking']);
    }
    scan(){
        this.router.navigate(['/barcodescanner']);
    }

}