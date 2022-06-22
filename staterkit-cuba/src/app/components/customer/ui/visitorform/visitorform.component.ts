import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { VistiorService } from '../../../Admin/visitor/state/vistior.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitorform',
  templateUrl: './visitorform.component.html',
  styleUrls: ['./visitorform.component.scss'],
})
export class VisitorFormComponent implements OnInit {
  title = 'Add New Request';

  constructor(
    private service: VistiorService,
    public toster: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(fromValue) {
    this.service.customerRequest(fromValue).subscribe((res: any) => {
      if (res.status) {
        this.toster.success(res.message);
        this.router.navigate(['customer/visitors']);
      } else {
        this.toster.error(res.message);
      }
    });
  }

  // onCancel() {
  //   this.form.reset();
  // }
}
