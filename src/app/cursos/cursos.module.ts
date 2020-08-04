import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoService } from '../../../../data-binding/src/app/curso.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CursoRoutingModule } from './curso.routing.module';


@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [
    CursoService
  ],
})
export class CursosModule { }
