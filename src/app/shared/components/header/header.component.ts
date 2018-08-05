import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.c-header') true;

  constructor() { }

  ngOnInit() {
  }

}
