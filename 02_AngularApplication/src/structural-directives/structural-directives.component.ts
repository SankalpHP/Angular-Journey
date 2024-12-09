import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  
  // ---------------------------------------------*ngIf and @if @else if @else----------------------------------
  // *ngIf
  display = true;
  show_para = false
  show(){
     this.show_para = !this.show_para;
  }

  // @if()
  newIF = "new syntax of ngIf and ngelse i.e @if(), @elseif, @else  which introduced from angualer 17";
  show_table:boolean = false;
  displayTable(){
    this.show_table = !this.show_table;
  }

  // ---------------------------------------------*ngFor and @for loop-----------------------------------
  // *ngFor()
  fullStackDev = [
    {
      id:1,
      name:"Angular",
    },
    {
      id:2,
      name:"node js",
    },
    {
      id:3,
      name:"My Sql",
    },
    {
      id:4,
      name:"AWS",
    }
  ];
  
  // Assignment *ngIf and *ngFor directives
  showName:boolean = false;
  person = [
    {
      name:"Jack",
      age:21
    },
    {
      name:"Alex",
      age:23
    },
    {
      name:"mia",
      age:25
    },
    {
      name:"lisa",
      age:20
    }
  ];

  //  newFor = "new syntax of ngFor i.e @ngFor(), @empty which introduced from angualer 17";
  newFor = "new syntax of ngFor i.e @ngFor(), @empty which introduced from angualer 17";
  employee = [
    {
      id:1,
      name:"Mack",
      Salary:1000
    },
    {
      id:2,
      name:"jill",
      Salary:2000
    },
    {
      id:3,
      name:"chris",
      Salary:3000
    }
  ];

  // [ngSwitch] directive
  student = {
    age:10
  };
  
  // new switch 
  newSwitch = "new structural directive [@Switch] case";
}
