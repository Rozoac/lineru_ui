import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {
  @ViewChild('txtProgress', null) txtProgress: ElementRef;
  public date:Date;
  public dateForm: FormControl;
  public max = 900000;
  public min = 150000;
  public maxDate:Date;
  public minDate:Date;
  public value = 150000;
  
  constructor() {
    this.paymentTime()
    
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
    

  ngOnInit() {
  }

}
