import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IloginData } from "../Model/userLogin.Data";
import { IuserRegistrationData } from "../Model/userRegistration.Data";
@Injectable({ providedIn: "root" })
export class UserRegisterServices {
  private loginEndPoint: string =
    "http://mobile.test.acorsociety.com/ideators/api/users/userloginasync";
  private registerEndPoint: string =
    "http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync";
  public header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ "Content-Type": "application/json" });
  }
  userLogin(item: IloginData) {
    return this.http.post(this.loginEndPoint, JSON.stringify(item), {
      headers: this.header
    });
  }
  userRegister(item: IuserRegistrationData) {
    return this.http.post(this.registerEndPoint, JSON.stringify(item), {
      headers: this.header
    });
  }
}
