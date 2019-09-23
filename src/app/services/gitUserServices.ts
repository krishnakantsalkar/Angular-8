import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Iusers } from "../shared/model/userData";
import { Ifollowers } from "../shared/model/followerData";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class gitUserServices {
  private userEndPoint: string = "https://api.github.com/users/";
  private followerEndPoint: string =
    "https://api.github.com/users/octocat/followers";
  constructor(private http: HttpClient) {}

  Users(username): Observable<Iusers> {
    return this.http.get<Iusers>(this.userEndPoint + username);
  }

  Followers(username): Observable<Iusers> {
    return this.http.get<Iusers>(this.userEndPoint + username + "/followers");
  }
}
