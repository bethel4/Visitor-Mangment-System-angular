import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { environment } from 'src/environments/environment';
import {UserProfileService} from '../../state/user-profile/user-profile.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user_data: any;
  @Input() status: any;
  @Output() saveimage = new EventEmitter<any>();
  url: string = environment.imageUrl;
  empty = 'N/A';
  closeResult: string;
  imageUrl;
  timenew: number;
  data: any;
  constructor(private modalService: NgbModal, private query: SessionQuery,private service: UserProfileService) {}
  seconds: number | any;
  hide = true;
  route
  role= this.query.isRole()

  trigger: Subject<void> = new Subject<void>();
  webcamImage: WebcamImage | any;

  takePicture(): void {
    this.trigger.next();
  }
  retakePicture(): void {
    this.trigger.next();
    this.hide = true;
  }

  handleImage(webcamImage: WebcamImage): void {
    //console.log(webcamImage)
    this.webcamImage = webcamImage.imageAsDataUrl;
    console.log(webcamImage.imageAsDataUrl);
    this.hide = false;
  }
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  ngOnInit(): void {
    
    if(this.role=='admin'||this.role=='Super Admin'){
     
      this.route='SuperAdmin/editprofile'
    }
    if(this.role=='Customer'){
      this.route='customer/editprofile'
    }
    if(this.role=='Security'){
      this.route='security/editprofile'
    }
    this.service.get().subscribe((data) => {
      this.data=data.data
      console.log(this.data);
    })
  }

  print() {
    window.print();
  }

  openXl(content) {
    this.hide = true;
    this.modalService.open(content, { size: 'lg' });
  }
}