import { Component } from '@angular/core';
import { resolve } from 'path';
import { from, interval, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = '01_RxJS_operators';

  constructor(){
  // RxJS of() operator 

    // const observerable = of({name:"XYZ"},[1,2,3,4,5],function(){return "Hello"});
    // observerable.subscribe((observer)=>{
    //   console.log(observer);
    // });
  }
  
 ngOnInit():void{
  // RxJS from() operator

  // const ob = from(new Promise(resolve => resolve("This is the resolve msg!")));
    // const m = new Map()
    // m.set("a",1);
    // m.set("b",2);
    // m.set("c",3);
    // const ob = from(m);
    // ob.subscribe((observer)=>{console.log(observer);
    // });

    // RxJS interval() operator

    // const ob_Interval = interval(1000);
    // const ob_unsubscribe = ob_Interval.subscribe((observer)=>{
    //   console.log(observer);
    // });  
    
    // setTimeout(()=>{
    //   ob_unsubscribe.unsubscribe();
    // },5000);
    
    // RxJS timer operator

    const ob = timer(2000,1000);
    const unsubscribe = ob.subscribe((observer)=>{console.log(`Value = ${observer}`);
    });

    setTimeout(()=>{
      unsubscribe.unsubscribe();
    },5000);
  } 

}
