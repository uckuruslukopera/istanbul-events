import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../../../shared/services/event.service';
import { IEvent } from '../../../shared/interfaces/event.model';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent implements OnInit {
  id: number;
  event: IEvent;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']

      this.event = this.eventService.getEventDetail(this.id);
    });


  }

}
