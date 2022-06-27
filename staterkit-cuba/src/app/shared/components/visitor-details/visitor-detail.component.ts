<<<<<<< HEAD
import { query } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  ModalDismissReasons,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { SessionQuery } from 'src/app/auth/state/session.query';
=======
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-visitor-details',
  templateUrl: './visitor-details.component.html',
  styleUrls: ['./visitor-details.component.scss'],
})
export class VisitiorDetailsComponent implements OnInit {
  @Input() user_data: any;
<<<<<<< HEAD
  @Input() status: any;
  @Output() saveimage = new EventEmitter<any>();
  url: string = environment.imageUrl;
  empty = 'N/A';
  closeResult: string;
  imageUrl;
  timenew: number;
  constructor(private modalService: NgbModal, private query: SessionQuery) {}
  seconds: number | any;
  hide = true;

  role = this.query.isRole();

  trigger: Subject<void> = new Subject<void>();
  webcamImage: WebcamImage | any;

=======
  @Output() saveimage =  new EventEmitter<any>();
  url: string = environment.imageUrl;
  empty = 'N/A';
  closeResult: string;
  constructor(private modalService: NgbModal) {}
  seconds: number | any;
  photeModal:any
  hide=true
  hidebutton=true
  trigger: Subject<void> = new Subject<void>();
  webcamImage: WebcamImage | any;
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
  takePicture(): void {
    this.trigger.next();
  }
  retakePicture(): void {
    this.trigger.next();
<<<<<<< HEAD
    this.hide = true;
  }

=======
    this.hide=true
  }
  
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
  handleImage(webcamImage: WebcamImage): void {
    //console.log(webcamImage)
    this.webcamImage = webcamImage.imageAsDataUrl;
    console.log(webcamImage.imageAsDataUrl);
<<<<<<< HEAD
    this.hide = false;
=======
    this.hide=false
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
  }
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
<<<<<<< HEAD

  ngOnInit(): void {
    console.log(this.user_data);
  }

  print() {
    window.print();
  }

  openXl(content) {
    this.hide = true;
=======
 
  ngOnInit(): void {}

print(){
window.print();
}

  openXl(content) {
    this.hide=true;
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
    this.modalService.open(content, { size: 'lg' });
  }

  saveImage(image) {
<<<<<<< HEAD
    this.imageUrl = image;
    this.saveimage.emit(image);
  }
}
=======
    this.saveimage.emit(image)
  }
}
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
