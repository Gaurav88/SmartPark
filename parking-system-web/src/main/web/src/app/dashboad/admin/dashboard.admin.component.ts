import { Component, OnInit } from '@angular/core';
import Chart from "chartjs";
import { DashboardAdminService } from './dashboard.admin.service';

@Component({
    selector:'dashboard-admin',
    templateUrl:'./dashboard.admin.component.html',
    styleUrls:['./dashboard.admin.component.css']
})

export class DashboardAdminComponent implements OnInit{

    constructor(private service:DashboardAdminService){}
    ctx = document.getElementById('myChart1');
    ctx2 = document.getElementById('myChart2');
    myDoughnutChart1:Chart;
    myDoughnutChart2:Chart;
    ngOnInit(){
        this.service.getParkingSlots().subscribe(data=>{
            if(data){
                this.createChart(data);
            }
        });
    }

    createChart(data:any){
       this.myDoughnutChart1= new Chart(this.ctx, {
            type: 'doughnut',
            data:{
                label:['Total Available','Total Booked','Total Parked'],
                datasets:[{
                    data:[12,34,56],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
    
            },
            options: {}
        });

        this.myDoughnutChart2= new Chart(this.ctx2, {
            type: 'doughnut',
            data:{
                label:['Total Available','Total Booked','Total Parked'],
                datasets:[{
                    data:[12,34,56],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
    
            },
            options: {}
        });
    }

}