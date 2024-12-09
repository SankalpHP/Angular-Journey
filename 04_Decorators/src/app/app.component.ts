import { AfterViewInit, Component, ElementRef, Output, output, ViewChild, viewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { EventEmitter } from 'stream';
import { ViewChildComponent } from './view-child/view-child.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { HighlightElementDirective } from './host-binding.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputDecoratorComponent,OutputDecoratorComponent,
            ViewChildComponent,ContentChildComponent,HighlightElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  
  // Input decorator code in parent component 
  sendMessage:string = "Message From Parent Component to Child Component!";
  updateMsg(){
    this.sendMessage = "Message From Parent Component to Child Component is updated!"
  }

  // output decorator code in parent component 
  receiveMessage:string = '';
  receiveChildEvent(eventData:string){
    this.receiveMessage = eventData;
  }

  // viewchild decorator code in parent component
  @ViewChild(ViewChildComponent) ViewChildComponent? : ViewChildComponent;
  @ViewChild('btnRef') btn?:ElementRef<HTMLButtonElement>;

  incrementChildCounter(){
    console.log(this.ViewChildComponent);
    this.ViewChildComponent?.incrementCounter();
  }

  ngAfterViewInit(): void {
    if(this.btn?.nativeElement){
       this.btn.nativeElement.innerHTML = "Counter ++";
       this.btn.nativeElement.style.backgroundColor = "red";
       this.btn.nativeElement.style.color = "white";
    }
  }
}
