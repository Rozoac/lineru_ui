import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { CreditoService } from '../../services/credito.service';
import { AmountService } from '../../services/amount.service';
import { Router } from '@angular/router';
import { Credito } from 'src/app/models/credito.model';

@Component({
  selector: 'app-pay-credit',
  templateUrl: './pay-credit.component.html',
  styleUrls: ['./pay-credit.component.css']
})
export class PayCreditComponent implements OnInit {

  public credit: any;

  constructor(public _usuarioService:UsuarioService, public _creditoService:CreditoService,
              public _amountService: AmountService, public router: Router) {
    this.cargarSaldoPendiente();
    // this.cargarSaldosTotales();
    
   }

  ngOnInit() {
  }

  cargarSaldoPendiente(){
    this._usuarioService.creditoUsuario().subscribe((res:any) => {
      console.log(res)
      if(res.pagoCredito === true){
        return;
      }else{
        this.credit = res;
      }
    })
  }
  // cargarSaldosTotales(){
  //   this._usuarioService.creditosUsuario().subscribe((res:any) => {
  //     console.log(res)
  //   })
  // }

  pagarDeuda(){

    this._creditoService.actualizarCredito(this.credit._id).subscribe((res:any) => {
      console.log(this.credit.valorSolicitado)
      this._amountService.addAmount(this.credit.valorSolicitado)
      this.credit = 0
      this.cargarSaldoPendiente();
      this.router.navigate(['/cuenta/']);
    })
  }

}
