import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadAdminGuard implements CanMatch {
  canMatch(
    route: Route,
    segments: UrlSegment[]): boolean {
      const role = localStorage.getItem('role');
      console.log(role);
      if(role === 'ADMIN'){
        return true;
      }
    return false;
  }
}
