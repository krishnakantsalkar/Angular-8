import { Component, OnInit } from "@angular/core";
import { gitUserServices } from "src/app/services/gitUserServices";
import { Iusers } from "../../shared/model/userData";
import { Ifollowers } from "../../shared/model/followerData";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public userData: Iusers;
  public followerData: Ifollowers;
  public searchModel;

  constructor(private gitUserServices: gitUserServices) {}

  ngOnInit() {}

  Search() {
    this.gitUserServices.Users(this.searchModel).subscribe(data => {
      this.userData = data;
      // console.log(data)
    });

    this.gitUserServices.Followers(this.searchModel).subscribe(data => {
      this.followerData = data;
    });
  }
}
