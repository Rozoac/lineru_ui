import { Injectable } from '@angular/core';
import {Usuario} from '../models/usuario.model';
import {URL_SERVICIOS} from '../config/config';
import swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public identity;
  public token = null;

  constructor(public http: HttpClient) {
    this.cargarStorage();
   }

   cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.identity = JSON.parse(localStorage.getItem('identity'));
    } else {
      this.token = null;
      this.identity = null;
    }
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('usuario'));
    if (identity !== 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  crearUsuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + '/usuario';

    return this.http.post( url, usuario ).pipe(
      map( (resp: any) => {

        swal.fire('Usuario creado', 'success' );
        return resp.usuario;
      })
    )
  }

  login(usuario:Usuario) {
    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario ).pipe(
      map( (resp: any) => {

        swal.fire('Bienvenido', 'success' );
        return resp.usuario;
      })
    )

  }

  creditoUsuario(){
    let url = URL_SERVICIOS + '/usuario/' + JSON.parse(localStorage.getItem('id'));
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        let credito = resp.usuario.creditos[resp.usuario.creditos.length-1]
        
        return credito;
      })
    )
  }
  creditosUsuario(){
    let url = URL_SERVICIOS + '/usuario/' + JSON.parse(localStorage.getItem('id'));
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        return resp.usuario;
      })
    )
  }
}
