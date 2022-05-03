import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./views/list/list.component";
import { ElementComponent } from "./views/element/element.component";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ViewElementComponent } from './views/view-element/view-element.component';

// make views into module
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ElementComponent,
    NotFoundComponent,
    ViewElementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
