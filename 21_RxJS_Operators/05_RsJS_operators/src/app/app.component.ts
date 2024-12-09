import { Component } from '@angular/core';
import { concatMap, interval, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  outer = of(1,2,3,4);
  inner = of("A","B","C","D");

  ngOnInit(){
    // this.outer.pipe(
    //   concatMap((val)=>{
    //     console.log('Outer Val: ' + val);
    //     console.log('Starting new observable');
    //     return this.inner;
    //   })
    // ).subscribe((res)=>{
    //    console.log('Reading ' + res);
    // });

    this.outer.pipe(
      switchMap((val)=>{
        console.log('Outer Val: ' + val);
        console.log('Starting new observable');
        return interval(1000).pipe(take(3));
      })
    ).subscribe((res)=>{
       console.log('Reading ' + res);
    });
  }
}
