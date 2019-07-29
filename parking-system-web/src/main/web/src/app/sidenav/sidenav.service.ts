import { Injectable } from "@angular/core";
import {SideNavMenuModel} from "./SideNavMenuModel";
import {Urls} from "../common/URLs";
import {HttpService} from "../common/HttpService.service";
import { UserModel } from '../user/user.model';
@Injectable({
    providedIn:"root",
})

export class SidenavService{
    model:SideNavMenuModel[]=[];
    userModel:UserModel=new UserModel();
    constructor(private httpService:HttpService){
    }

    getSidenavMenu(){
        this.httpService.get(Urls.SIDE_NAV_MENU).subscribe(data=>{
            data.forEach(element => {
                this.model.push(element);
            });
        });
    }

}
