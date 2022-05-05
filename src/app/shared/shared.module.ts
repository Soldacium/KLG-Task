import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./components/nav/nav.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { TriggernamePipe } from "./pipes/triggername.pipe";
import { InterimtriggerPipe } from "./pipes/interimtrigger.pipe";

@NgModule({
  declarations: [NavComponent, TriggernamePipe, InterimtriggerPipe],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  exports: [NavComponent, TriggernamePipe, InterimtriggerPipe],
})
export class SharedModule {}
