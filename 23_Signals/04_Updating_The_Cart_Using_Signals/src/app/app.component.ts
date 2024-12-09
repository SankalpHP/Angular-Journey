import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  newItemName:string|undefined;
  newItemPrice:number|null = null;

  cart=[
    {name:"Product A", price: 10},
    {name:"Product B", price: 11},
    {name:"Product C", price: 12},
  ];

  itemList = signal(this.cart)

  addItem(){
    if (this.newItemName && this.newItemPrice != null) {
      const newItem = {name:this.newItemName, price:this.newItemPrice};
      this.itemList.set([...this.itemList(), newItem]);

      this.newItemName = '';
      this.newItemPrice = null;// Reset field
    }
  }

  removeItem(item:{name:string,price:number}){
    this.itemList.set(this.itemList().filter((i)=> i !== item))
  }

  totalPrice = computed(()=>{
    return this.itemList().reduce((acc,curr) => acc + curr.price,0)
  })
}
