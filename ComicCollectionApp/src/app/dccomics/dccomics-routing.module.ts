import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DccomicsPage } from './dccomics.page';

const routes: Routes = [
  {
    path: '',
    component: DccomicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DccomicsPageRoutingModule {}
