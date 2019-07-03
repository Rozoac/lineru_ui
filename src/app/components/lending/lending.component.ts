import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/service.index';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

import { Credito } from '../../models/credito.model';
import { CreditoService } from 'src/app/services/credito.service';
import { AmountService } from '../../services/amount.service';


@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {
  @ViewChild('txtProgress', null) txtProgress: ElementRef;
  public flag;
  public id;
  public date:Date;
  public dateForm: FormControl;
  public max = 900000;
  public min = 150000;
  public maxDate:Date;
  public minDate:Date;
  public value = 150000;
  
  constructor(public _userService: UsuarioService, public router: Router, public _creditoService: CreditoService, public _amountService: AmountService) {
    this.paymentTime()
    this.verificarSaldos()
    
  }
      public paymentTime(){
        this.date = new Date();
        this.maxDate = new Date(this.date.setDate(this.date.getDate() + 30));
        this.minDate = new Date(this.date.setDate(this.date.getDate() - 26));
        console.log(this.maxDate);
        console.log(this.minDate);
        this.dateForm = new FormControl(this.date);

      }

      public onChanges( newValue: number ) {
        if ( newValue >= this.max ) {
          this.value = this.max;
        }else if ( newValue <= this.min ) {
          this.value = this.min;
        }else {
          this.value = newValue;
        }
        this.txtProgress.nativeElement.value = this.value;
      }

      public lending() {
        if(!this._userService.getIdentity()){
          this.router.navigate(['/registro']);
        }else{

          console.log(this.verificarSaldos())
          if(this.verificarSaldos()){
            let credito = new Credito(
              this.value,
              this.dateForm.value,
              false
              )
              this.id = localStorage.getItem('id');

              if(this._amountService.baseAmount <= this.value){
                swal.fire('Monto disponible agotado', ':(' );
                return ;
              }

              this._creditoService.crearCredito(credito, this.id ).subscribe( (res:any) => {
                console.log(res);
              if(res.ok){ 
                this._amountService.subtractAmount(this.value);
                this.router.navigate(['/cuenta/pagar-credito']);
              }
            })
          }else{
            swal.fire('Tienes saldos por pagar', ':(' );
            this.router.navigate(['/cuenta/pagar-credito']);
          }
        }
      }

      verificarSaldos():any{
        this._userService.creditoUsuario().subscribe((res:any) => {
          if(res === undefined){
            this.flag = true
          }else {
            if(!res.pagoCredito){
              this.flag = false
            }else{
              this.flag = true;
            }
          }
        })
        return this.flag;
      }
    

  ngOnInit() {
    
  }

}
