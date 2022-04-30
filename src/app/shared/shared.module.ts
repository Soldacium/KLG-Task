import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./components/nav/nav.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule, MatToolbarModule } from "@angular/material";

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  exports: [NavComponent],
})
export class SharedModule {}
