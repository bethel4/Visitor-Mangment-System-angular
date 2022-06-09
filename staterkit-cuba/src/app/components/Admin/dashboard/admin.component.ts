import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { companyDB } from '../../../shared/tables/company';
import * as chartData from '../dashboard/data/adminReports'
import * as knobData from '../dashboard/data/knob';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public todayTotalSale = chartData.todayTotalSale;
  public totalVisit = chartData.totalVisit;
  public smallBarCharts = chartData.smallBarCharts;
  public lat_m1: number =  20.593683;
  public lng_m1: number = 78.962883;
  public zoom_m1: number = 4;
  days=[]
  constructor() { }

  ngOnInit(): void {
    var startdate = moment();
   for(let i=0;i<= 7;i++){
      startdate = startdate.subtract(i, "days");
     this.days.push(startdate.format("ddd"))
     startdate = moment();
  }
  console.log(this.days)
  document.getElementById('cursormode').append(knobData.cursormode);
  document.getElementById('digitstep').append(knobData.digitstep);
  document.getElementById('displayInputDisable').append(knobData.displayInputDisable);
  document.getElementById('displayPrevious').append(knobData.displayPrevious);
  document.getElementById('offsetArc').append(knobData.offsetArc);
  document.getElementById('profit').append(knobData.profit);
}
  }
