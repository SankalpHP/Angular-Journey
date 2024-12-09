import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = new FormControl('',[
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(10),
    Validators.pattern('^[a-zA-Z0-9]+$')
  ]);

  submit(){
    console.log(this.name.value);
    console.log(this.name.valid);  
  }
}
