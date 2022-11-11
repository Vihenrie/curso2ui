import { Component, OnInit } from '@angular/core';
import { curso } from 'src/app/core/model';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']

})
export class ListacursosComponent implements OnInit {

  cursos: curso[] = [
    {id: 1, nomecurso: 'qualquer curso'}
  ];
  displayedColumns = ['id', 'nomecurso']

  constructor() {}

  ngOnInit(): void {
  }

}
