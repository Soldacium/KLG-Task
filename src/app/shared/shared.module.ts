import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./components/nav/nav.component";
import { ListItemComponent } from "./components/list-item/list-item.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule, MatToolbarModule } from "@angular/material";

@NgModule({
  declarations: [NavComponent, ListItemComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  exports: [ListItemComponent, NavComponent],
})
export class SharedModule {}
