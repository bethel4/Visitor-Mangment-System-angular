import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../shared/tables/company';
import * as chartData from '../../../../../../cuba/src/app/shared/data/dashboard/ecommerce'
import * as chartDatas from '../../../../../../cuba/src/app/shared/data/dashboard/default'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public todayTotalSale = chartData.todayTotalSale;
  public totalVisit = chartData.totalVisit;
  public profit = chartData.profit;
  public riskFactor = chartData.riskFactor;
  public smallBarCharts = chartDatas.smallBarCharts;
  public lat_m1: number =  20.593683;
  public lng_m1: number = 78.962883;
  public zoom_m1: number = 4;
  
  constructor() { }

  ngOnInit(): void {
  }
}