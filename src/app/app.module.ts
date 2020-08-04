import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosService } from './cursos/cursos.service';
import { CursoRoutingModule } from './cursos/curso.routing.module';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
// import { AlunosModule } from './alunos/alunos.module';
// import { CursosModule } from './cursos/cursos.module';
import { AlunosGuard } from './guards/alunos.guard';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoRoutingModule,
    FormsModule,
    // CursosModule,
    // AlunosModule
  ],
  //  providers: [],
  providers: [LoginService, AuthGuard, CursosGuard,AlunosGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
