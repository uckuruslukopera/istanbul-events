import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventItem } from '../../../shared/interfaces/event-item';
import { EventService } from '../../../shared/services/event.service';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent implements OnInit {
  @HostBinding('class.c-event-detail') true;
  id: number;
  event: EventItem;

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
