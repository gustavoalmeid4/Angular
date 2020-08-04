import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormCanDeactivate } from './form-candeactivate';

@Injectable()

export class AlunosDeactivateGuard implements CanDeactivate<FormCanDeactivate> {

  canDeactivate(
    component: FormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {


    console.log("Fui desativadooo!");
    // return component.podeMudarRota()?component.podeMudarRota(): true;
    return component.podeDesativar();

  }
}
