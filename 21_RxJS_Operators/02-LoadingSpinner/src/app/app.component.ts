import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fetchData:string = '';
  spinner:boolean = true;

  constructor(){
    timer(3000).subscribe(()=>{
      this.spinner = false;
      this.fetchData = "The data is fetched...";
    });
  }
}
