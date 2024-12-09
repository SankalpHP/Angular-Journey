import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../service/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router)
  console.log(loginService.login());
  
  if(loginService.login()){
     return true
  }else{
    router.navigate(['/login'])
    return false;
  }
};
