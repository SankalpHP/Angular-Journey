import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  private userRoles: string[] = ['user', 'admin'];
  private loggedIn: boolean = false;

  isLoggedIn(): boolean{
    return this.loggedIn;
  }

  isAdmin(): boolean{
    return this.isLoggedIn() && this.userRoles.includes('admin');
  }
}
