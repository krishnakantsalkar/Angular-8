import { NgModule, Component } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { UserRegistrationComponent } from "./components/user-registration/user-registration.component";

export const routes: Route[] = [
  {
    path: "Signup",
    component: UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
