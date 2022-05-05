import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditElementComponent } from "./views/edit-element/edit-element.component";
import { ListComponent } from "./views/list/list.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { ViewElementComponent } from "./views/view-element/view-element.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: ListComponent,
    data: { animation: "slideInList" },
  },
  {
    path: "view-element/:id",
    component: ViewElementComponent,
    data: { animation: "slideInView" },
  },
  {
    path: "edit-element/new",
    component: EditElementComponent,
    data: { animation: "slideInView" },
  },
  {
    path: "edit-element/:id",
    component: EditElementComponent,
    data: { animation: "slideInView" },
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
