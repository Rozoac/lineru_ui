import { Component } from '@angular/core';
import { AmountService } from '../../services/amount.service';

@Component({
  selector: 'app-base-amount',
  templateUrl: './base-amount.component.html',
  styleUrls: ['./base-amount.component.css']
})
export class BaseAmountComponent {

  public baseAmount: number;

  constructor(public _amountService: AmountService) {
    this.baseAmount = _amountService.baseAmount;
   }


}
