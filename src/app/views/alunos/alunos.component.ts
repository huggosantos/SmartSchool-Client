import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
    
  navigateToAlunoCreate(): void {
      this.router.navigate(['/alunos/create']) ;
  }

}
