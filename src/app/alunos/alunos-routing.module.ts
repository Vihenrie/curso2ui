import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaalunosComponent } from './listaalunos/listaalunos.component';

const routes: Routes = [
  {
    path:'', component: ListaalunosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
