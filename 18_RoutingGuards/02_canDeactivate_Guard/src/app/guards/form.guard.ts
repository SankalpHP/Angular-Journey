import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '../login/login.component';

export const formGuard: CanDeactivateFn<any> = (
  component:LoginComponent, 
  currentRoute:ActivatedRouteSnapshot, 
  currentState:RouterStateSnapshot, 
  nextState:RouterStateSnapshot) => {
   
  // Both way below way are the vaild

  // if(component.loginForm.get('username')?.dirty && component.loginForm.get('password')?.dirty){
  //    return confirm("Your Changes are unsaved! Are you sure you want to leave?")?true:false;
  // }

  if(component.loginForm.dirty){
    return confirm("Your Changes are unsaved! Are you sure you want to leave?")?true:false;
 }
  return true;
};
