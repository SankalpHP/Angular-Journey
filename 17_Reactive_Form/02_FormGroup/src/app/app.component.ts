import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02_FormGroup';

  myForm:FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.email),
      age:new FormControl('',Validators.min(18))
     });
  }

  submit(){
    const userAge = this.myForm.get('age')?.value;

    if(userAge >= 18){
      console.log(this.myForm.value);
    }else{
      alert("AGE IS BELOW 18");
    }
  }
}
