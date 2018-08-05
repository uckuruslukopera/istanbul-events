import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { EventItem } from '../../../../shared/interfaces/event-item';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent implements OnInit {

  @HostBinding('class.c-event-item') true;
  
  @Input() event: EventItem;

  constructor() { }

  ngOnInit() {
  }

  onEventCardSelected(e) {

  }

}
