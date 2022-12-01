import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Collectionitem1Page } from './collectionitem1.page';

const routes: Routes = [
  {
    path: '',
    component: Collectionitem1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Collectionitem1PageRoutingModule {}
