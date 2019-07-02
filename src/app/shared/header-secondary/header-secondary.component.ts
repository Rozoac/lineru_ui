import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-secondary',
  templateUrl: './header-secondary.component.html',
  styleUrls: ['./header-secondary.component.css']
})
export class HeaderSecondaryComponent implements OnInit {

  @Input('header') typeHeader;

  constructor() { }

  ngOnInit() {
  }

}
