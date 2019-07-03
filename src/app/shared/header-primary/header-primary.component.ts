import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-primary',
  templateUrl: './header-primary.component.html',
  styleUrls: ['./header-primary.component.css']
})
export class HeaderPrimaryComponent implements OnInit {

  constructor(public _usuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {
  }

  account(){
    if(localStorage.getItem('id')){
      this.router.navigate(['/cuenta']);
    }else{
      this.router.navigate(['/iniciar-sesion']);
    }
  }

}
