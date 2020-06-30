import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor( private snackBar: MatSnackBar) { }

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
}
