import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate() {
    let usuario = localStorage.getItem('usuario');

    if ( usuario !== null ) {
     
     return true;
    } else {

      this.router.navigate(['/iniciar-sesion']);
      return false;
    }
  }
}
