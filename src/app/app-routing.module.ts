import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementComponent } from './views/element/element.component';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'ele',
    component: ElementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
