import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  public solicitudes;

  constructor(public _usuarioService:UsuarioService) {
    this.cargarSaldosTotales();

   }

  ngOnInit() {
  }

  cargarSaldosTotales(){
      this._usuarioService.creditosUsuario().subscribe((res:any) => {
        this.solicitudes = res.creditos
        console.log(res.creditos)
      })
    }

}
