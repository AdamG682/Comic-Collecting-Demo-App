import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DccomicsPageRoutingModule } from './dccomics-routing.module';

import { DccomicsPage } from './dccomics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DccomicsPageRoutingModule
  ],
  declarations: [DccomicsPage]
})
export class DccomicsPageModule {}
