import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IuserRegistrationData } from "../../shared/Model/userRegistration.Data";
import { UserRegisterServices } from "../../shared/services/user.register.services";
import { Router } from "@angular/router";
@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  public Register: FormGroup;
  public submitted: boolean;
  constructor(
    private fb: FormBuilder,
    private userServices: UserRegisterServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.Register = this.fb.group({
      FirstName: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      LastName: ["", [Validators.required]],
      Gender: ["", [Validators.required]],
      MobileNo: ["", [Validators.required]],
      EmailId: ["", [Validators.required]],
      Address: ["", [Validators.required]]
    });
  }
  Save(data: IuserRegistrationData) {
    this.submitted = true;
    if (!this.Register.valid) {
      return;
    }
    console.log(data);
    this.userServices.userRegister(data).subscribe(data => {
      alert("Registration Succesful");
      this.router.navigateByUrl("/Login");
      console.log(data);
    });
  }
}
