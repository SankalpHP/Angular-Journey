import { CommonModule, JsonPipe } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.css'
})
export class NgDoCheckComponent implements DoCheck{

  @Input() user:any;
 
  // ngOnChanges(changes: SimpleChanges): void {
  //   // This method will be called when the 'user' input changes.
  //   console.log('ngOnChanges called Changes:', changes);
  // }
  previousValue:string|undefined;
  ngDoCheck(): void {
     
    if(this.user.name != this.previousValue){
       this.previousValue = this.user.name;
       console.log("The Current UserName is " + this.user.name);
    }
  }
}
