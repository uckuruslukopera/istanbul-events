import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.c-header') true;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

}
