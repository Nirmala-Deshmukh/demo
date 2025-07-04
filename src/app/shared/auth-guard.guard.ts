import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanLoadFn, CanMatchFn, ResolveFn } from '@angular/router';
import { LoginService } from '../common-services/login.service';
import { DataService } from '../common-services/data.service';
import { Observable } from 'rxjs';

// Functional Component for canActivate guard
export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  return loginService.isLoggedIn(); //will return true or false
};

// Functional Component for CanActivateChildFn guard
export const authChildGuard: CanActivateChildFn = (route, state) => {
  const loginService = inject(LoginService);
  return loginService.isLoggedIn(); //will return true or false
};

// Functional Component for CanLoadFn guard
export const authCanLoadGuard: CanLoadFn = (route, state) => {
  const loginService = inject(LoginService);
  return loginService.isLoggedIn(); //will return true or false
};

// Functional Component for CanMatchFn guard
export const authCanMatchGuard: CanMatchFn = (route, state) => {
  const loginService = inject(LoginService);
  return loginService.userHasRole('admin'); //will return true or false
};

// Functional Component for ResolveFn guard
export const authResolveGuard: ResolveFn<any> = (route, state)  => {
  const loginService = inject(DataService);
  console.log(loginService.getAPIDataForResolve());
  return loginService.getAPIDataForResolve();
};

// Functional Component for ResolveFn guard
export const authDeactiveGuard: CanDeactivateFn<CanComponentDeactivate> = (component)  => {
  return component.canDeactivate ? component.canDeactivate() : true;
};

export interface CanComponentDeactivate
{
canDeactivate:()=> boolean | Observable<boolean>
}