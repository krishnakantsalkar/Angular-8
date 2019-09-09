import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: "app-routes",
  templateUrl: "./routes.component.html",
  styleUrls: ["./routes.component.css"]
})
export class RoutesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
export const routes: Route[] = [
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "Product-List",
    component: ProductListComponent
  },
  {
    path: "",
    redirectTo: "/Home",
    pathMatch: "full"
  }
];
