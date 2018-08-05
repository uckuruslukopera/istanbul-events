import { Component, OnInit, HostBinding } from '@angular/core';

import { EventItem } from '../../../shared/interfaces/event-item';
import { EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  @HostBinding('class.c-event-list') true;
  events: EventItem[];

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
      this.events = this.eventService.getEvents();
  }

}
