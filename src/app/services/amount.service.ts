import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class AmountService {

  public baseAmount:number;

  constructor() {
    this.baseAmount = environment.baseAmount 
   }


   addAmount(value){
     this.baseAmount = this.baseAmount + value;
   }

   subtractAmount(value){
    this.baseAmount = this.baseAmount - value;
   }
}
