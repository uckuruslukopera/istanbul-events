import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;

  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Sababa',
      lastName: 'Bilgen',
      userName: 'sabishko'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    if (!this.currentUser) { return; }
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
