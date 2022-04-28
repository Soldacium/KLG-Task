import {
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
} from "@angular/material";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [MatToolbarModule, MatTableModule, MatCheckboxModule, MatSortModule],
})
export class MaterialModule {}
