import { Component } from '@angular/core';

// @Compoment is the component Decorater which contain metadata in key value pair's which send to Angular
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
    Interpolation = "Interpolation and Generating Components";
    message = "This is a Angular Training";

    PropertyBinding = "Property Binding";
    UserInput = 'Hello';
    isDisabled = false;
    
    EventBinding = "Event Binding in Angular"
    display(msg:string){
      alert(msg + " to event binding in angular, click Event is Triggered");
    }

    counter:number = 0;
    increment(){
      this.counter++;
    }
    
    press:string = '';
    keyUp(data:any){
       //console.log(data);
       this.press = data.target.value;
    }

    EnterPress(){
      //console.log("Enter Key is pressed");
      alert("Enter Key is pressed");
    }
    
    two_way:string = "Two Way Data Binding in the Angular";
    Two_Way_Binding:string = '';
}
