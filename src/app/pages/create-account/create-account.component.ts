import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import swal from 'sweetalert2'


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  forma: FormGroup;

  constructor(public _usuarioService: UsuarioService,public router: Router) { }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl( null , Validators.required ),
      correo: new FormControl( null , [Validators.required, Validators.email] ),
      cedula: new FormControl( null , Validators.required ),
      clave: new FormControl( null , Validators.required )
    });
  }

  registrarUsuario() {

    if ( this.forma.invalid ) {
      return;
    }

    let usuario = new Usuario(
      this.forma.value.clave,
      this.forma.value.cedula,
      this.forma.value.nombre,
      this.forma.value.correo
    );

    this._usuarioService.crearUsuario( usuario )
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
