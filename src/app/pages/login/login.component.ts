import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor(public _usuarioService: UsuarioService,public router: Router) { }

  ngOnInit() {
    this.forma = new FormGroup({
      cedula: new FormControl( null , Validators.required ),
      clave: new FormControl( null , Validators.required )
    });
  }

  loginUser(){
    if ( this.forma.invalid ) {
      return;
    }

    let usuario = new Usuario(
      this.forma.value.clave,
      this.forma.value.cedula
    );

    this._usuarioService.login( usuario )
              .subscribe( resp => {
                console.log(resp)
                localStorage.setItem('usuario', JSON.stringify(resp));
                localStorage.setItem('id', JSON.stringify(resp._id));
                this.router.navigate(['/cuenta']);


    },
    error => {
      console.log(error)
      const mensaje = error.error.mensaje;
      swal.fire({
        type: 'error',
        title: mensaje,
        text: 'Algo salio mal'
      })
    });

  }

}
