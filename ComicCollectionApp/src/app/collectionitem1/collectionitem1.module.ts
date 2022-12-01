import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Collectionitem1PageRoutingModule } from './collectionitem1-routing.module';

import { Collectionitem1Page } from './collectionitem1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Collectionitem1PageRoutingModule
  ],
  declarations: [Collectionitem1Page]
})
export class Collectionitem1PageModule {}
