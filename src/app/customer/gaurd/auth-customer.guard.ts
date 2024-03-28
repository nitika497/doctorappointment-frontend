import { CanActivateFn } from '@angular/router';

export const authCustomerGuard: CanActivateFn = (route, state) => {
  return true;
};
