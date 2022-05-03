import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ElementComponent } from "./views/element/element.component";
import { ListComponent } from "./views/list/list.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: ListComponent,
  },
  {
    path: "view-element",
    component: ElementComponent,
  },
  {
    path: "edit-element/:id",
    component: ElementComponent,
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
