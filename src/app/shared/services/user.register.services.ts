import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IloginData } from "../Model/userLogin.Data";
import { IuserRegistrationData } from "../Model/userRegistration.Data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

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
  userLogin(item: IloginData): Observable<IloginData> {
    return this.http
      .post<IloginData>(this.loginEndPoint, JSON.stringify(item), {
        headers: this.header
      })
      .pipe(
        map(item => {
          if (item && item.UserIdentity) {
            localStorage.setItem("currentUser", JSON.stringify(item));
            return item;
          }
          return item;
        })
      );
  }
  userRegister(item: IuserRegistrationData): Observable<IuserRegistrationData> {
    return this.http.post<IuserRegistrationData>(
      this.registerEndPoint,
      JSON.stringify(item),
      {
        headers: this.header
      }
    );
  }
}
