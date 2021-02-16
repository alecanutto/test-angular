import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user: User | undefined;
  private token: string | undefined;

  constructor() { }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getUser() {
    if (this.user) {
      return this.user;
    }

    const userLocalStorage = localStorage.getItem('usuario');
    if (userLocalStorage) {
      this.user = JSON.parse(userLocalStorage);
      return this.user;
    }

    return undefined;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const tokenLocalStorage = localStorage.getItem('token');
    if (tokenLocalStorage) {
      this.token = tokenLocalStorage;
      return this.token;
    }

    return undefined;
  }

  logout() {
    delete this.user;
    delete this.token;
    localStorage.clear();
  }

  isConnected() {
    console.log('user: ' + this.getUser());
    console.log('token: ' + this.getToken());
       
    if (this.getUser() && this.getToken()) {
      return true;
    }
    return false;
  }

}
