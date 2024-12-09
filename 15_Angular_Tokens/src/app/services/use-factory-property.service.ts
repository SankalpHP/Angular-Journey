import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseFactoryPropertyService {

  constructor() { }

  msg(){
    return "This is the use factory property service";
  }
}
