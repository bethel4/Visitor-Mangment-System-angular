import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { companyDB } from '../../../shared/tables/company';
import * as chartData from '../dashboard/data/adminReports';
import { AdminService } from '../dashboard/state/admin.service';
let primary = localStorage.getItem('primary_color') || '#7366ff';
let secondary = localStorage.getItem('secondary_color') || '#f73164';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  public todayTotalSale;
  public totalVisit
  public smallBarCharts = chartData.smallBarCharts;
  public lat_m1: number = 20.593683;
  public lng_m1: number = 78.962883;
  public zoom_m1: number = 4;
  days = [];
  constructor(private service: AdminService) {}
  data = [];
  value=[]
  sum=0
  valueWeeks=[]
  sumWeeks=0;
  total:any
  ngOnInit(): void {
    let days=[]
var startdate = moment();
for(let i=0;i<= 7;i++){
   startdate = startdate.subtract(i, "days");
  days.push(startdate.format("ddd"))
  startdate = moment();
}

    this.service.get().subscribe((res) => {
      console.log(res)
      this.total=res.total
      this.data=res.daily_report[0]
     
      for (let index = 0; index < 7; index++) {
     this.value[index]=this.data["day_"+index]
        this.sum=this.sum+Number(this.value[index])
      }
      this.data= res.weekly_report[0]
      for (let index = 1; index <=3; index++) {
        this.valueWeeks[index-1]=this.data["week_"+index]
           this.sumWeeks=this.sumWeeks+Number(this.valueWeeks[index-1])
         }
         
      this. totalVisit = {
        series: [{
            name: 'Visitor',
            data: this.value
        }],
        chart: {
            height: 105,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
    
                columnWidth: '20%',
                startingShape: 'rounded',
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false,
    
            formatter: function (val) {
                return val ;
            },
            offsetY: -10,
            style: {
                fontSize: '12px',
                colors: [primary]
            }
        },
        xaxis: {
            categories:days,
            position: 'bottom',
    
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#7366ff',
                        colorTo: '#c481ec',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
            },
            labels: {
                show: false
            }
    
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val ;
                }
            }
    
        },
        grid: {
            show: false,
            padding: {
                top: -35,
                right: -45,
                bottom: -20,
                left: -10
            },
        },
        colors: [primary],
    }; 
  this.todayTotalSale = {
      series: [{
          name: 'Week1',
          data: this.valueWeeks
  
      }, {
          name: ' Week2',
          data:this.valueWeeks
  
      }, {
          name: 'Week3',
          data: this.valueWeeks
  
      }],
      chart: {
          height: 150,
          type: 'area',
          toolbar: {
              show: false
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth',
          width: 0
      },
      xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z"]
  
      },
      yaxis: {
          show: false
      },
      tooltip: {
          x: {
              format: 'dd/MM/yy HH:mm'
          },
      },
      legend: {
          show: false,
      },
      grid: {
          show: false,
          padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -40,
          }
      },
      fill: {
          type: 'gradient',
          opacity: [1, 0.4, 0.25],
          gradient: {
              shade: 'light',
              type: 'horizontal',
              shadeIntensity: 1,
              gradientToColors: ['#a26cf8', '#a927f9', '#7366ff'],
              opacityFrom: [1, 0.4, 0.25],
              opacityTo: [1, 0.4, 0.25],
              stops: [30, 100],
              colorStops: []
          },
          colors: [primary, primary, primary],
      },
      colors: [primary, secondary, secondary],
  };
  
    })
  }

}
