import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn:boolean = true;
  public user = {
    name:'alex',
    age:20,
    role:'admin'
  }
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

  userHasRole(role:string):boolean
  {
   return role === this.user.role;
  }
}
