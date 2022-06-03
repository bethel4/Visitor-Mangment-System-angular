import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../../shared/services/firebase/auth.service";
import { SessionService } from '../../state/session.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public toster: ToastrService,
    private service: SessionService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      contact_number: ['', [Validators.required, Validators.minLength(10)]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  // Login With Google

  // Simple Login
  // login() {
  //   this.authService.SignIn(
  //     this.loginForm.value["email"],
  //     this.loginForm.value["password"]
  //   );
  // }
  onSubmit() {
    const {  } = {};
  
    this.service.login('contact_number', 'password').subscribe((res: any) => {
      if (res.status == 1) {
        this.router.navigate(["/main"]);
      } else {
        this.toster.error('You have enter Wrong Email or Password.');
      }
    });
  }
}
