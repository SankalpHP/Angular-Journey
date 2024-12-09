import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  ob$:Observable<any>|undefined;
  
  // value$:Observable<any>;

  // constructor(){
  //   this.value$ = new Observable((observer)=>{
      
  //     setTimeout(()=>{
  //       observer.next(1);
  //       observer.next(2);
  //       observer.next(3);
  //       observer.next(4);
  //     },2000);
  //   });
  // }

  constructor(){
    this.fetchData();
  }

  fetchData(){
    this.ob$ = new Observable((observer)=>{
      fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((response) => {
          //console.log(response);
          
          observer.next(response);
          observer.complete();
      })
      .catch((error)=>{
         observer.error(error);
      })
      .finally(()=>{
        console.log("fetched data successfully!...");
      });
    });
  }
 
}
