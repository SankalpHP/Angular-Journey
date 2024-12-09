import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  standalone: true,
  imports: [],
  templateUrl: './ng-on-changes.component.html',
  styleUrl: './ng-on-changes.component.css'
})
export class NgOnChangesComponent implements OnChanges{

  PreviousValue:string|undefined;
  CurrentValue:string|undefined;
  
  /*
     Whenever there are changes to the InputValue app component properties the changes are 
     passed to SimpleChanges Interface and comes to changes argument
  */ 
  @Input() InputValue:string = '';
  ngOnChanges(changes: SimpleChanges): void {
     console.log("Calling from the ngOnChanges...");
     console.log(changes);

     if(changes['InputValue']){
        this.PreviousValue = changes['InputValue'].previousValue;     
        this.CurrentValue = changes['InputValue'].currentValue;
      }
  }
}
