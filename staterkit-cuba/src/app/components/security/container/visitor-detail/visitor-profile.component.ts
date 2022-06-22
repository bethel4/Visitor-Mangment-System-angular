import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VistiorService } from 'src/app/components/Admin/visitor/state/vistior.service';

@Component({
  selector: 'app-visitor-profile',
  templateUrl: './visitor-profile.component.html',
  styleUrls: ['./visitor-profile.component.scss']
})
export class VisitiorProfileComponent implements OnInit {
  selectedID: any=this.route.snapshot.paramMap.get('id');
  row: any[];
 ;
  constructor(public route:ActivatedRoute,private service: VistiorService,private toaster: ToastrService) { }
onGet(){
  let datas=[]
  this.service.get().subscribe((data) => {
    console.log(data)
    if(data.status){
      console.log('kkk')
      for (let i = 0; i < data.data.length; i++) {
     datas.push({
          id: data.data[i].id,
          visitor: data.data[i].visitor   ,
          contact_number:data.data[i].contact_number,
          approval_status:data.data[i].approval_status,
          customer_name:data.data[i].customer_name,  
          address: data.data[i].address,
          time_in:data.data[i].time_in,
          time_out: data.data[i].time_out,
          visitor_role:data.data[i].visitor_role,
          email: data.data[i].email,
          reason:data.data[i].reason,
          visitor_image: data.data[i].visitor_image,
          approval_time: data.data[i].approval_time,
          qr_code: data.data[i].qr_code,

        });
      }

   
   this.row=datas.filter(data => data.id==this.selectedID)
    }
    });
}
  ngOnInit(): void {
    this.onGet()
  }
  saveImage(image){
    console.log(image);
      this.service.addPhoto({img_url:image,id:this.selectedID}).subscribe((res:any) =>{
        if(res.status==1){
               this.toaster.success(res.message);
               this.onGet()
        }else{
          this.toaster.error(res.message);
        }
      })
    }
}
