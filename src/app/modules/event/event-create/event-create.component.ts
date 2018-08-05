import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html'
})
export class EventCreateComponent implements OnInit {
  
  isDirty: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSave(e) {

  }

  onCancel(e) {
    this.router.navigate(['event']);
  }

}
