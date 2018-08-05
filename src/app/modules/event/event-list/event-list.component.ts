import { Component, OnInit } from '@angular/core';

import { EventService } from '../../../shared/services/event.service';
import { IEvent } from '../../../shared/interfaces/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
      this.events = this.eventService.getEvents();
  }

}
