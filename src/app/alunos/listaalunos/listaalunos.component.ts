import { Component, OnInit } from '@angular/core';
import { aluno } from 'src/app/core/model';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunos: aluno[] = [
    {id: 1, nomealuno: 'qualquer nome'}
  ];

  displayedColumns = ['id', 'nomealuno']

  constructor() { }

  ngOnInit(): void {
  }

}
