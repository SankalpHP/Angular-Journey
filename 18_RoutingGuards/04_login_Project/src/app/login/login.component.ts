import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router){
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
    });
  }

  auth(){
    if(this.loginService.check(this.loginForm.value.username,this.loginForm.value.password)){
      this.router.navigate(['/admin'])
    };
  }
}
