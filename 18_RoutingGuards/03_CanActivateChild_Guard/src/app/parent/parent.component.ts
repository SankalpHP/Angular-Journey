import { Component } from '@angular/core';
import { RouteserviceService } from '../service/routeservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  
  constructor(private active:RouteserviceService){}

  enable(){
    this.active.setButtonClicked();
  }
}
