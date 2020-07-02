import { Aluno } from './../aluno.model';
import { Router } from '@angular/router';
import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno:  Aluno = {
    nome: '',
    sobrenome:'',
    telefone: ''
  };

  dados = {
    "nome": 'Huggo ',
    "sobrenome":'Oliveira',
    "telefone": '73-9 9961-1102'
  };

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {    
  }

  createAluno(): void{
    this.alunoService.create(this.aluno).subscribe(()=>{
      this.alunoService.showMenssage('Produto Criado')
      this.router.navigate(['/alunos'])
    }, err =>{
      console.log(err.message);
    })

   
  }

  cancel(): void {
    this.router.navigate(['/alunos'])
  }

}
