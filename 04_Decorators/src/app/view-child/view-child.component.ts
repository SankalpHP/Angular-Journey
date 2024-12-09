import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
   
  title:string = "@viewchild() Decorator";
  counter:number = 0;

  incrementCounter(){
    this.counter++;
  }
}
