import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./components/course/course.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";
import { PropertyComponent } from "./components/property/property.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { RouterModule } from "@angular/router";
import { routes } from "./components/routes/routes.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ListFilterPipe } from "./pipes/list-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ParentComponent,
    ChildComponent,
    PropertyComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    ProductListComponent,
    ListFilterPipe
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
