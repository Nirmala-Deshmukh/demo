import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn:boolean = false;
  isLoggedIn()
  {
    return this.loggedIn;
  }
  login()
  {
    this.loggedIn = true;
  }
  logout()
  {
    this.loggedIn = false;
  }
}
