import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-secondary',
  templateUrl: './header-secondary.component.html',
  styleUrls: ['./header-secondary.component.css']
})
export class HeaderSecondaryComponent implements OnInit {

  public usuario;

  @Input('header') typeHeader;

  constructor(public _usuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {
    this.usuario = this._usuarioService.getIdentity();
    console.log(this.usuario);
  }

  cerrarSesion(){
    localStorage.clear()
    this.router.navigate(['/iniciar-sesion']);
  }

}
