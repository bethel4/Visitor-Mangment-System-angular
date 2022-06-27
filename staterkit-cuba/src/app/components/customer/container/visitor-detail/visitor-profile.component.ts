import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VistiorService } from '../../../Admin/visitor/state/vistior.service';

@Component({
  selector: 'app-visitor-profile',
  templateUrl: './visitor-profile.component.html',
  styleUrls: ['./visitor-profile.component.scss']
})
export class VisitiorProfileComponent implements OnInit {
  selectedID: any=this.route.snapshot.paramMap.get('id');
  row: any[];
 ;
  constructor(public route:ActivatedRoute,private service: VistiorService,
              ) { }

  ngOnInit(): void {
    let datas=[]
    this.service.get().subscribe((data) => {
      console.log(data)
      if(data.status){

        for (let i = 0; i < data.data.length; i++) {
       datas.push({
            id: data.data[i].id,
            visitor: data.data[i].visitor   ,
            contact_number:data.data[i].contact_number,
            approval_status:data.data[i].approval_status,
            customer_name:data.data[i].customer_name,  
            address: data.data[i].address,
            email: data.data[i].email,
            time_in:data.data[i].time_in,
            time_out: data.data[i].time_out,
            visitor_role:data.data[i].visitor_role,
            reason:data.data[i].reason,
            approval_time: data.data[i].approval_time,
            qr_code: data.data[i].qr_code
          });
        }

     
     this.row=datas.filter(data => data.id==this.selectedID)
      }
      });
  }

}
