import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArmyComponent } from "./pages/army/army.component";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "army",
    component: ArmyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
