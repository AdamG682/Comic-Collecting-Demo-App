import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkhorsePageRoutingModule } from './darkhorse-routing.module';

import { DarkhorsePage } from './darkhorse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkhorsePageRoutingModule
  ],
  declarations: [DarkhorsePage]
})
export class DarkhorsePageModule {}
