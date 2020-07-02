import { Aluno } from './aluno.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
 
 // url = "http://localhost:5000/api";
  constructor( private snackBar: MatSnackBar,private http: HttpClient) { }

  showOnConsole(msg: string): void{
    console.log(msg);
  }

  showMenssage(msg: string): void{
    this.snackBar.open(msg,'',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })

  }

  create(aluno: Aluno): Observable<Aluno>{
    console.log(aluno);
    return this.http.post<Aluno>('/api/aluno' ,aluno)
  }
  
  read(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>('/api/aluno')
  }


}
