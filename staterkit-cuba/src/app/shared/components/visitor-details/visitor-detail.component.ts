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
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-visitor-details',
  templateUrl: './visitor-details.component.html',
  styleUrls: ['./visitor-details.component.scss'],
})
export class VisitiorDetailsComponent implements OnInit {
  @Input() user_data: any;
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
    console.log(this.user_data);
  }

  print() {
    window.print();
  }

  openXl(content) {
    this.hide = true;
    this.modalService.open(content, { size: 'lg' });
  }

  saveImage(image) {
    this.imageUrl = image;
    this.saveimage.emit(image);
  }
}
