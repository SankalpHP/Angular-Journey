import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AuthAdminService } from '../services/auth-admin.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  constructor(private authService: AuthAdminService){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
      if(this.authService.isAdmin()){
        return true;
      }else{
        alert("You don't have admin rights!");
        return false;
      }
  }
}
