import { Component, OnInit, ElementRef } from "@angular/core";
import { IproductData } from "../../shared/model/product.data";
import { map, filter, debounceTime } from "rxjs/operators";
import { productServices } from "../../shared/services/product.services";
import { fromEvent } from "rxjs";
import { ListFilterPipe } from "../../pipes/list-filter.pipe";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  public currentRating: number;
  public showRating = false;
  public isShow: boolean = true;
  public productData: IproductData[];
  constructor(
    private el: ElementRef,
    private productServices: productServices
  ) {}

  ngOnInit() {
    this.productServices.Product().subscribe(data => {
      this.productData = data;
    });
  }

  imgFunc() {
    this.isShow = !this.isShow;
  }

  ratingFunc(rating: number) {
    console.log(rating);
    this.currentRating = rating;
    this.showRating = true;
  }
}
