import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanLoad, CanLoadFn } from '@angular/router';
import { LoginService } from '../common-services/login.service';

// Functional Component for canActivate guard
export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  return loginService.isLoggedIn(); //will return true or false
};


export const authChildGuard: CanActivateChildFn = (route, state) => {
  const loginService = inject(LoginService);
  return loginService.isLoggedIn(); //will return true or false
};

export const authCanLoadGuard: CanLoadFn = (route, state) => {
  const loginService = inject(LoginService);
  return loginService.isLoggedIn(); //will return true or false
};