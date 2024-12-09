import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(){
    // effect() function example
    effect(()=>{
      console.log(
        `Count value: ${this.createCount()} \nRemaining count: ${this.computedCount()}`
      );
    });
  }
  
  // creating the signals
  count = signal<number>(0);

  incrementCounter(){
    this.count.set(this.count() + 1);
    console.log("Signal Value Is = ", this.count());
  }

  // updating the signals
  cart = signal({
    name:"Product 1",
    email:"abc@example.com"
  });

  ngOnInit(){
    console.log("Previous cart: ", this.cart());
    this.cart.update((cartDetails)=>({
      ...cartDetails,
      qty:3,
      name:'Product 2'
    }));
    console.log("Updated cart: ", this.cart());
  }

  // computed signal 
  createCount = signal(40);
  computedCount = computed(()=>{ return 100 - this.createCount()})
  
}
