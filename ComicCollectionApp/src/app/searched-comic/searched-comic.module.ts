import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchedComicPageRoutingModule } from './searched-comic-routing.module';

import { SearchedComicPage } from './searched-comic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchedComicPageRoutingModule
  ],
  declarations: [SearchedComicPage]
})
export class SearchedComicPageModule {}
