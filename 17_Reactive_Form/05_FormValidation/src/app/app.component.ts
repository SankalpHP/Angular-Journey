import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '05_FormValidation';
  
  Login:FormGroup;

  constructor(){
    this.Login = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email])
    });
  }
  
  get getLoginData(){
    return {
      name:this.Login.get('name'),
      email:this.Login.get('email')
    }
  }

  loginSubmit(){
    if(this.Login.invalid){
       alert("Invalid Input Please Fill the Valid Input");
       return;
    }
    console.log(this.Login.value);
  }
}
