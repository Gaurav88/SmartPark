import { Component, OnInit } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import { SidenavService } from './sidenav.service';
import { SideNavMenuModel } from './SideNavMenuModel';
import {Router} from '@angular/router';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit{
    menuModel:SideNavMenuModel[];
    userName:String="Aradhana";
    
    constructor(private sidenavService: SidenavService,private router:Router) { }

    ngOnInit() {
        this.sidenavService.getSidenavMenu();
        this.menuModel=this.sidenavService.model;
    }

    gotoProfile(){
        this.router.navigate(['/user-profile']);
    }

    gotoHome(){
        this.router.navigate(['']);
    }
}