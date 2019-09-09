import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IproductData } from "../model/product.data";

@Injectable({ providedIn: "root" })
export class productServices {
  public productEndPoint: string = "./assets/productAPI.json";
  constructor(private http: HttpClient) {}
  Product(): Observable<IproductData[]> {
    return this.http.get<IproductData[]>(this.productEndPoint);
  }
}
