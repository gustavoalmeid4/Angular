import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';

mostrarMenu:boolean=false;

constructor(private loginService:LoginService){

}

ngOnInit() {
  this.loginService.mostrarMenuEmitter.subscribe(
    mostrar=>this.mostrarMenu=mostrar
  )
}
}
