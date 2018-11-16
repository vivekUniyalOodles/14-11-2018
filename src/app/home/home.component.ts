import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from "../global-service.service"
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:GlobalServiceService,public snackBar: MatSnackBar) { }
  

  // lineChart
  public lineChartData:Array<any> 
  =[
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any>  = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'bar';
  public pieChartType:string = 'doughnut';
 
  // Pie
  public pieChartLabels:string[] ;

  public pieChartData:number[] ;


  ngOnInit() {
    // calling global service function to fetch chart api data
    this.snackBar.open("Welcome to admin pannel "+" "+ (localStorage.getItem("user")).toUpperCase() ,"x" , {
      duration: 5000,
    });
    this.service.getData("chart").subscribe(
      success => {        
         this.pieChartData=success["value"];        
         this.pieChartLabels=success["label"];
      },error => {
        console.log('error=', error);
    });
  }

}
