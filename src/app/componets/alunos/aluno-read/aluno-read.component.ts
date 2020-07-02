import { AlunoService } from './../aluno.service';
import { Aluno } from './../aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.read().subscribe(a=>{
      this.alunos = a
      console.log(a)
    })
  }

}
