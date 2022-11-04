import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { ListaalunosComponent } from './listaalunos/listaalunos.component';


@NgModule({
  declarations: [
    ListaalunosComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
