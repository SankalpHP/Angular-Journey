import { Component, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  counter1 = signal(0);
  counter2 = signal(0);

  updatecounter1(){
    this.counter1.update(() => this.counter1() + 1);
  }

  updatecounter2(){
    this.counter2.update(() => this.counter2() + 1);
  }

  counterUpdate = effect(() => {
    console.log(`Counter1:- ${this.counter1()} \nCounter2(untracked):- ${untracked(() => this.counter2())}`);
  });
}
