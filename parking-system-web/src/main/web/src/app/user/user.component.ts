import { Component, OnInit } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';
import { HttpService } from '../common/HttpService.service';
import { Urls } from '../common/URLs';
import { UserModel } from './user.model';

@Component({
    selector: 'user-profile',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    userName:String="Aradhana";
    user:UserModel=new UserModel();
    constructor(private router:Router,private httpService:HttpService) { }

    ngOnInit() {
        this.httpService.get(Urls.USER_PROFILE).subscribe(data=>this.user=data);
    }

    changeProfileDetails(){
        this.router.navigate(['/registration']);
    }
}