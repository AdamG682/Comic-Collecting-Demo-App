import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarvelPagePageRoutingModule } from './marvel-page-routing.module';

import { MarvelPagePage } from './marvel-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarvelPagePageRoutingModule
  ],
  declarations: [MarvelPagePage]
})
export class MarvelPagePageModule {}
