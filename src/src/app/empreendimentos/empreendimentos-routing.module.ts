import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpreendimentosPage } from './empreendimentos.page';

const routes: Routes = [
  {
    path: '',
    component: EmpreendimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpreendimentosPageRoutingModule {}
