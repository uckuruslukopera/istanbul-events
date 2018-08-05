import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventItemComponent } from './event-list/event-item/event-item.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ImagePipe } from '../base/pipes/image.pipe';
import { BaseModule } from '../base/base.module';
import { EventRouterGuard } from '../../shared/services/event-router.guard';

const routes: Routes = [
  { path: 'list', component: EventListComponent },
  { path: ':id', component: EventDetailComponent, canActivate: [EventRouterGuard] },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BaseModule
  ],
  declarations: [
    EventListComponent,
    EventItemComponent,
    EventDetailComponent
  ],
  providers: [ImagePipe],
})
export class EventModule { }
