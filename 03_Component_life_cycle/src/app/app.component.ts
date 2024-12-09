import { Component, DoCheck, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';
import { NgAfterContentInitComponent } from './ng-after-content-init/ng-after-content-init.component';
import { NgDestroyComponent } from './ng-destroy/ng-destroy.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgOnChangesComponent,NgOnInitComponent,NgDoCheckComponent,NgAfterContentInitComponent,NgDestroyComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck{
  title = '03_Component_life_cycle';
  
  InputValue:string = "Old Values";
  /*
    similar Oops logic is apply here In OOPs whenever you create the class object with new keyword automatically
    the constructor is called first of the class same In Angular whenever the component is initilized the 
    constructor is automatically call behind the scene.
  */
  constructor(){
    //console.log("Constructor is calling on initilization of the component...");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck hook is invoked...");
  }

  updateValue(){
    this.InputValue = "Value is updated"
  }

  user = { name: 'John' };

  changeUserName(): void {
    // Modify the 'name' property of the 'user' object
    this.user.name = 'Alice';
  }
  
  dataFormParent:string = '';
  sendDataToChild(){
    let random = Math.floor(Math.random() * 10);
    this.dataFormParent = "Random Number " + random;
  }

  displayComponent: boolean = true;
  toggle(){
    this.displayComponent = !this.displayComponent;
  }

  ngOnInit(): void {
    console.log("AppComponent: OnInit");
  }
}
