import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  product:any|undefined;
  user$:Observable<any>|undefined;
  loadData:boolean = false;

  constructor(private http:HttpClient){}
 
  // Using Only HTTP Client
  getProduct(){
    this.http.get('https://dummyjson.com/products/search?q=phone').subscribe((data)=>{
        this.product = data;
        console.log(this.product);
    });
  }
 

  // Using HTTP Client with observable
  getUser(){
    this.user$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    console.log(this.user$);
    this.loadData = true;
  }
}
