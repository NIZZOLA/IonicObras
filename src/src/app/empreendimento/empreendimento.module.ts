import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpreendimentoPageRoutingModule } from './empreendimento-routing.module';

import { EmpreendimentoPage } from './empreendimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpreendimentoPageRoutingModule
  ],
  declarations: [EmpreendimentoPage]
})
export class EmpreendimentoPageModule {}
