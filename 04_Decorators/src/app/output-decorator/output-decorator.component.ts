import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  standalone: true,
  imports: [],
  templateUrl: './output-decorator.component.html',
  styleUrl: './output-decorator.component.css'
})
export class OutputDecoratorComponent {
  
  title = "@Output Decorator";

  @Output() myevent = new EventEmitter();
  emitMsg(){
     this.myevent.emit("Message Sending Data From Child To Parent Component is updated!");
  }
}
