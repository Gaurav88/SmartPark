import { Injectable } from "@angular/core";
import {HttpService} from "../../common/HttpService.service";
import {Urls} from "../../common/URLs";

@Injectable({
    providedIn:"root",
})

export class LoginService{

    constructor(private httpService:HttpService){}

    doUserLogin(user){
        this.httpService.post(Urls.LOGIN_USER, user).subscribe(
            data => {
                if(data.message=='Success'){
                    
                }
            }
          );
    }
}