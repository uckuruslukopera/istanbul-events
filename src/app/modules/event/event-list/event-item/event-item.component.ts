import { Component, OnInit, Input } from '@angular/core';

import { IEvent } from '../../../../shared/interfaces/event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent implements OnInit {
  
  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

  onEventCardSelected(e) {

  }

}
