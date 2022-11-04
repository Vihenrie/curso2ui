import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListacursosComponent } from './listacursos/listacursos.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ListacursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule
  ]
})
export class CursosModule { }
