import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from '@angular/router';
import { RouteserviceService } from '../service/routeservice.service';
import { inject } from '@angular/core';


export const activeGuard: CanActivateChildFn = (childRoute:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  
  const myService = inject(RouteserviceService)
  const router = inject(Router);

  if(myService.getButtonClicked()){
    return true;
  }else{
    router.navigate(['/parent']);
    return false;
  }  
};
