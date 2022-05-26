import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchedComicPage2PageRoutingModule } from './searched-comic-page2-routing.module';

import { SearchedComicPage2Page } from './searched-comic-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchedComicPage2PageRoutingModule
  ],
  declarations: [SearchedComicPage2Page]
})
export class SearchedComicPage2PageModule {}
