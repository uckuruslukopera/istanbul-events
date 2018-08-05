import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouterGuard implements CanActivate {
  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const eventExists = this.eventService.getEventDetail(+next.params['id']);
    if (!eventExists) this.router.navigate(['404']);
    return !!eventExists;
  }
}
