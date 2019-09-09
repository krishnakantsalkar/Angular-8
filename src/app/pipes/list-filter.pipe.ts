import { Pipe, PipeTransform } from "@angular/core";
import { IproductData } from "../shared/model/product.data";

@Pipe({
  name: "listFilter"
})
export class ListFilterPipe implements PipeTransform {
  transform(items: IproductData[], value: string) {
    if (!items) return [];
    if (!value) return items;
    if (value == "" || value == null) return [];
    return items.filter(
      (e: IproductData) => e.product.toLowerCase().indexOf(value) > -1
    );
  }
}
