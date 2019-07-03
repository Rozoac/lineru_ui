import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from '../config/config';
import swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
import { Credito } from '../models/credito.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor(public http: HttpClient) { }


  crearCredito( credito: Credito, id:string ) {
    let url = URL_SERVICIOS + `/credito/${JSON.parse(id) }`;
    console.log(id)
    

    return this.http.post( url, credito ).pipe(
      map( (resp: any) => {
        swal.fire('Credito aceptado', 'success' );
        return resp;
      })
    )
  }
  actualizarCredito( id:string ) {
    let url = URL_SERVICIOS + `/credito/${id}`;    

    return this.http.put( url, '' ).pipe(
      map( (resp: any) => {
        swal.fire('Credito Pagado satisfactoriamente :)', 'success' );
        return resp;
      })
    )
  }

  rechazarCredito( id:string ) {
    let url = URL_SERVICIOS + `/credito/${id}/${JSON.parse(localStorage.getItem('id'))}`;    

    return this.http.put( url, '' ).pipe(
      map( (resp: any) => {
        swal.fire('Credito Pagado satisfactoriamente :)', 'success' );
        return resp;
      })
    )
  }

  

}
