import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/common/HttpService.service';
import {Urls} from '../../common/URLs';
import {Router} from '@angular/router';
import { ParkingModel } from './admin.model';

@Component({
    selector:'admin',
    templateUrl:'./admin.component.html',
    styleUrls:['./admin.component.css']
})

export class AdminComponent implements OnInit{
    
        parkingModel:ParkingModel[]=[];
        searchText;
        constructor(private httpService:HttpService, private router:Router){

        }
    ngOnInit() {
        this.getAllBookings();
    }

    getAllBookings():void{
        this.httpService.get(Urls.ADMIN_LIST_OF_BOOKED_VEHICLES).subscribe(data=>{
            this.parkingModel=data;
        });
    }

    
    markParked(slot:any){
        this.httpService.get(Urls.MARK_PARKED + slot.bookingId).subscribe(data=>{
            if(data.message=="Success"){
                window.location.href ="/admin";
                //this.router.navigate(['/admin']);
            }
        });
    }

    markLoggedOut(slot:any){
        this.httpService.get(Urls.LOGGED_OUT + slot.bookingId).subscribe(data=>{
            if(data.message=="Success"){
                window.location.href ="/admin";
                //this.router.navigate(['/admin']);
            }
        });
    }
    scan(){
        this.router.navigate(['/barcodescanner']);
    }


}
