import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importação dos Componentes
import {HomeComponent} from './views/home/home.component';
import  {AlunosComponent} from './views/alunos/alunos.component';
import { AlunoCreateComponent } from './componets/alunos/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './componets/alunos/aluno-update/aluno-update.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"alunos",
    component:AlunosComponent
  },
  {
    path:"alunos/create",
    component:AlunoCreateComponent
  },
  {
    path:"alunos/update/:id",
    component:AlunoUpdateComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
