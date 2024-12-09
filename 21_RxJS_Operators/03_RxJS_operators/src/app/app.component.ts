import { Component } from '@angular/core';
import { EMPTY, filter, from, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  ngOnInit(){

  // RxJS EMPTY operator  
    // EMPTY.subscribe({
    //   next:()=> console.log("Next"),
    //   complete:()=>console.log("Completed!")
    // });

   // RxJSPipeable operators
  //  const ob$1 = of(1,2,3,4,5,6);
  //  const ob$2 = ob$1.pipe(
  //    map((x) => x * 2)
  //  ); 
  //   ob$2.subscribe((observer)=>{
  //     console.log(observer);
  //   });

  //   const ob$3 = of("india","australia","england");
  //   const ob$4 = ob$3.pipe(
  //      map(x => x.toUpperCase())
  //   );
  //   ob$4.subscribe((observer)=>{
  //     console.log(observer);
  //   });

  // RxJS filter() function/method
    //  const ob$5 = from([1,2,3,4,5,6,7,8,9,10]);
    //  const even = ob$5.pipe(filter(even => even % 2 == 0));
    //  const odd = ob$5.pipe(filter(odd => odd % 2 !== 0));

    //  console.log("Even Number");
    //  even.subscribe((observer)=>{
    //    console.log(observer);
    //  });

    //  console.log("Odd Number");
    //  odd.subscribe((observer)=>{
    //   console.log(observer);
    //  });

  // RxJS map() function/method
    //  const value$ = of(1,2,3,4,5);
    //  const transform$ = value$.pipe(map(x => x * 2));
     
    //  transform$.subscribe((value)=>{
    //    console.log("Double Number = " + value);
    //  });

  // RxJS mergeMap() function/method
     const outerObserverable = from([1,2,3,4,5,6]);
     const innerObserverable = (value:number) => of(value * 2);
     
     const flatterObserverable = outerObserverable.pipe(
       mergeMap(innerObserverable)
     )

     flatterObserverable.subscribe((res) => console.log("Merge of two observerable result = " + res));
  }
}

