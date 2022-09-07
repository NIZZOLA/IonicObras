import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpreendimentosPageRoutingModule } from './empreendimentos-routing.module';

import { EmpreendimentosPage } from './empreendimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpreendimentosPageRoutingModule
  ],
  declarations: [EmpreendimentosPage]
})
export class EmpreendimentosPageModule {}
