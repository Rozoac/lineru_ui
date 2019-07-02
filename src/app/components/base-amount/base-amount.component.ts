import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-base-amount',
  templateUrl: './base-amount.component.html',
  styleUrls: ['./base-amount.component.css']
})
export class BaseAmountComponent {

  public baseAmount: number;

  constructor() {
    this.baseAmount = environment.baseAmount;
   }

}
