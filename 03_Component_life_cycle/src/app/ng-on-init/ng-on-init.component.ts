import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  standalone: true,
  imports: [],
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.css'
})
export class NgOnInitComponent implements OnInit{
  
  /*
     ngOnInit() lifecycle method is called whenever the component is initialized 
     and it only initialized at once
  */ 
  ngOnInit(): void {
    this.setCounter();
  }

  setCounter(){
    console.log("setCounter Method is called inside the ngOnInit() method when the component is initlized");
    console.log("and it only initialized at once");
  }
   
}
