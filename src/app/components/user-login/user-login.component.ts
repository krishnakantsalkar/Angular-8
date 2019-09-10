import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IloginData } from "../../shared/Model/userLogin.Data";
import { UserRegisterServices } from "../../shared/services/user.register.services";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  public Login: FormGroup;
  public submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userServices: UserRegisterServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.Login = this.fb.group({
      UserLogin: this.fb.group({
        UserName: ["", [Validators.required]],
        Password: ["", [Validators.required]]
      })
    });
  }
  Save(data: IloginData) {
    this.submitted = true;
    if (!this.Login.valid) {
      return;
    }
    console.log(data);
    this.userServices.userLogin(data).subscribe(data => {
      alert("login Succesful");
      this.router.navigateByUrl("/home");
      console.log(data);
    });
  }
}
