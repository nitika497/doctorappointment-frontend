import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('token')==null)
  return false;
  else return true
};
