import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchedComicPage } from './searched-comic.page';

const routes: Routes = [
  {
    path: '',
    component: SearchedComicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchedComicPageRoutingModule {}
