import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../user/user.model';
import { LoginService } from './login.client.service';

@Component({
    selector:'login-client',
    templateUrl:'./login.client.component.html',
    styleUrls:['./login.client.component.css']
})

export class LoginClientComponent implements OnInit{
    user:UserModel = new UserModel();
    showLoginSuccess:boolean;

    constructor(private service:LoginService){}

    ngOnInit(){
        this.service.doUserLogin(this.user);
    }

}