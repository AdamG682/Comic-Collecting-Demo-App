import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Collectionitem3Page } from './collectionitem3.page';

const routes: Routes = [
  {
    path: '',
    component: Collectionitem3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Collectionitem3PageRoutingModule {}
