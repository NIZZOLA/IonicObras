import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpreendimentoPage } from './empreendimento.page';

const routes: Routes = [
  {
    path: '',
    component: EmpreendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpreendimentoPageRoutingModule {}
