import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./components/nav/nav.component";
import { ListItemComponent } from "./components/list-item/list-item.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavComponent, ListItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListItemComponent, NavComponent],
})
export class SharedModule {}
