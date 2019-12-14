import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user: string, password: string): boolean {
    // call api
    // api will return
    localStorage.setItem('currentUser', user);
    return true;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
