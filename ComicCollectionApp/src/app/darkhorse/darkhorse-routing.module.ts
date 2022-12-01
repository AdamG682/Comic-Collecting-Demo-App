import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkhorsePage } from './darkhorse.page';

const routes: Routes = [
  {
    path: '',
    component: DarkhorsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarkhorsePageRoutingModule {}
