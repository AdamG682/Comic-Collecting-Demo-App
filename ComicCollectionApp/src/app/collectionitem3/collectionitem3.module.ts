import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Collectionitem3PageRoutingModule } from './collectionitem3-routing.module';

import { Collectionitem3Page } from './collectionitem3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Collectionitem3PageRoutingModule
  ],
  declarations: [Collectionitem3Page]
})
export class Collectionitem3PageModule {}
