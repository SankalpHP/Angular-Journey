import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_Observable';

  // observable = new Observable((observer)=>{
  //     observer.next("Hello");
  //     observer.error("Something went wrong!");
  //     observer.complete();
  // }).subscribe({
  //    next(value){
  //      console.log("Emitted Value = " + value);
  //    },
  //    error(err) {
  //      console.log(err);
  //    },
  //    complete(){
  //     console.log("Observable is Completed!");
  //    }
  // });

  // observable = new Observable((observer)=>{
  //    observer.next(1);
  //    observer.next(2);
  //    observer.next(3);
     
  //    setTimeout(()=>{
  //       console.log("After the two seconds!");
  //       observer.next(4);
  //       observer.complete();
  //    },2000);
  // })

  // constructor(){
  //   console.log("Before subscribe!");
  //   this.observable.subscribe({
  //     next(value){
  //       console.log("Value: " + value);
  //     },
  //     error(err) {
  //       console.log("Error occured: ", err);
  //     },
  //     complete(){
  //       console.log("Observable successfully executed");
  //     }
  //   });
  //   console.log("After subscribe");
  // }


  //**********************************************unsubscrible method****************************************** */
  observable = new Observable<number>((observer)=>{
    let count = 0;

   let Interval =  setInterval(()=>{
      observer.next(count++);
    },1000)

    return()=>{
      clearInterval(Interval);
      console.log("Interval Cleared...");
    } 
  });

  constructor(){
  let ob =   this.observable.subscribe({
      next(value){
        console.log(value);
      }
    });

   setTimeout(()=>{
    ob.unsubscribe();
   },5000);
    
  }
}
