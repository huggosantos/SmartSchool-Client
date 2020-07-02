import { Aluno } from './../aluno.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  aluno:  Aluno = {
    nome: '',
    sobrenome:'',
    telefone: ''
  };

  constructor(private alunoService: AlunoService,private router:Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.alunoService.readById(id).subscribe(alu=>{
      this.aluno=alu
    });
  }

  updateAluno(): void{
    this.alunoService.update(this.aluno).subscribe(() => {
      this.alunoService.showMenssage('Aluno Alterado Com sucesso!');
      this.router.navigate(['/alunos'])
    });

  }

  cancel():void{
    this.router.navigate(['/alunos'])
  }
}
