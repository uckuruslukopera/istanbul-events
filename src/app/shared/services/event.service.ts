import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/event.model';

const EVENTLIST: IEvent[] = [
  { 
    id: 1,
    imageUrl: 'https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_960_720.jpg',
    name: 'Angular Connect',
    price: { amount: 10, currency: 'USD'},
    time: '08:00',
    date: new Date('2018-02-13'),
    location: {
      address: 'Nr: 23',
      city: 'denver',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: 'Using Angular 4 Pipes',
        presenter: 'Peter',
        duration: 1,
        level: 'Intermediate',
        abstract: 'Something happens'
      }
    ]
  }, 
  { 
    id: 2,
    imageUrl: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
    name: 'Angular Connect',
    price: { amount: 10, currency: 'USD'},
    time: '08:00',
    date: new Date('2018-02-13'),
    location: {
      address: 'Nr: 23',
      city: 'denver',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: 'Using Angular 4 Pipes',
        presenter: 'Peter',
        duration: 1,
        level: 'Intermediate',
        abstract: 'Something happens'
      }
    ]
  }, 
  { 
    id: 2,
    imageUrl: 'https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg',
    name: 'Angular Connect',
    price: { amount: 10, currency: 'USD'},
    time: '13:00',
    date: new Date('2018-02-13'),
    location: {
      address: 'Nr: 23',
      city: 'denver',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: 'Using Angular 4 Pipes',
        presenter: 'Peter',
        duration: 1,
        level: 'Intermediate',
        abstract: 'Something happens'
      }
    ]
  }, 
  { 
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695_960_720.jpg',
    name: 'Angular Connect',
    price: { amount: 10, currency: 'USD'},
    time: '15:00',
    date: new Date('2018-02-13'),
    location: {
      address: 'Nr: 23',
      city: 'denver',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: 'Using Angular 4 Pipes',
        presenter: 'Peter',
        duration: 1,
        level: 'Intermediate',
        abstract: 'Something happens'
      }
    ]
  }, 
  
  
  // { id: 5, imageUrl: 'https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg',name: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '15:00', date: '2018-02-13', location: 'Denver'},
  // { id: 6, imageUrl: 'https://cdn.pixabay.com/photo/2014/07/31/23/04/smartphone-407108_960_720.jpg',name: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '10:00', date: '2018-02-13', location: 'Denver'},
  // { id: 7, imageUrl: 'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg',name: 'Angular Event', price: { amount: 10, currency: 'USD'}, time: '09:00', date: '2018-02-13', location: 'Denver'},
];

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): IEvent[] {
      return EVENTLIST;
  }

  getEventDetail(id: number): IEvent {
    return EVENTLIST.find(e => e.id === id);
  }
}