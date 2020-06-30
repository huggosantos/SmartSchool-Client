import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componets/template/header/header.component';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './componets/template/footer/footer.component';
import { NavComponent } from './componets/template/nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// Materia SideNav
import {MatSidenavModule}from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AlunosComponent } from './views/alunos/alunos.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';


import { RedDirective } from './directives/red.directive';
import { AlunoCreateComponent } from './componets/alunos/aluno-create/aluno-create.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AlunosComponent,
    HomeComponent,
    RedDirective,
    AlunoCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
