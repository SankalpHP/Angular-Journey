import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin:boolean = false;

  check(username:string,password:string){
    if(username != ''&&password != ''){
       this.isLogin = true
       return true;
    }
      alert("Login is required")
      return false;
  }

  login(){ 
    return this.isLogin;
  }
}
