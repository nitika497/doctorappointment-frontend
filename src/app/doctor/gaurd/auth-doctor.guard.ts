import { CanActivateFn } from '@angular/router';

export const authDoctorGuard: CanActivateFn = (route, state) => {
  return true;
};
