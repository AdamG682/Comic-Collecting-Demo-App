import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchedComicPage2Page } from './searched-comic-page2.page';

const routes: Routes = [
  {
    path: '',
    component: SearchedComicPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchedComicPage2PageRoutingModule {}
