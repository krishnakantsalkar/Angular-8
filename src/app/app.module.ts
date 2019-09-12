import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserRegistrationComponent } from "./components/user-registration/user-registration.component";
import { UserLoginComponent } from "./components/user-login/user-login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { routes } from "src/app/app-routing.module";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, UserRegistrationComponent, UserLoginComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
