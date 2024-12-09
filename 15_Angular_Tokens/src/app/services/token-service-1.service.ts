import { Injectable } from '@angular/core';

@Injectable()
export class TokenService1Service {
  
  log(){
    console.log("Type Token 1");  
  }

  showAlert(){
    alert("First Service");
  }
}
