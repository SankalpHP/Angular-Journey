import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteserviceService {
  private isActive:boolean = false;
  constructor() { }
  

  setButtonClicked(){
    this.isActive = true
  }

  getButtonClicked(){
    return this.isActive;
  }
}
