import { NgModule, Component } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { UserRegistrationComponent } from "./components/user-registration/user-registration.component";
import { UserLoginComponent } from "./components/user-login/user-login.component";
import { ContentComponent } from "./components/content/content.component";
import { HomeComponent } from "./components/home/home.component";
export const routes: Route[] = [
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "Login",
    component: UserLoginComponent
  },
  {
    path: "Signup",
    component: UserRegistrationComponent
  },
  {
    path: "content",
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
