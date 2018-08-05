import { Injectable } from '@angular/core';
import { EventItem } from '../interfaces/event-item';

const EVENTLIST = [
  { id: 1, imageUrl: 'http://via.placeholder.com/170x152', title: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '08:00', date: '2018-02-13', location: 'Denver'},
  { id: 2, imageUrl: 'http://via.placeholder.com/170x152',title: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '10:00', date: '2018-02-13', location: 'Denver'},
  { id: 3, imageUrl: 'http://via.placeholder.com/170x152',title: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '13:00', date: '2018-02-13', location: 'Denver'},
  { id: 4, imageUrl: 'http://via.placeholder.com/170x152',title: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '10:00', date: '2018-02-13', location: 'Denver'},
  { id: 5, imageUrl: 'http://via.placeholder.com/170x152',title: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '15:00', date: '2018-02-13', location: 'Denver'},
  { id: 6, imageUrl: 'http://via.placeholder.com/170x152',title: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '10:00', date: '2018-02-13', location: 'Denver'},
  { id: 7, imageUrl: 'http://via.placeholder.com/170x152',title: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '09:00', date: '2018-02-13', location: 'Denver'},
];

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): EventItem[] {
      return EVENTLIST;
  }

  getEventDetail(id: number): EventItem {
    return EVENTLIST.find(e => e.id === id);
  }
}