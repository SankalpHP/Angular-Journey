import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { convertToUpperCase, urlValidatior } from './Custom_Validators/Custom_Validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '08_CustomValiators';

  myForm:FormGroup

  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      name:['',convertToUpperCase],
      url:['',urlValidatior]
    });
  }

  valid(){
    if(!this.myForm.valid){
       alert('Please enter correct url');
       return false;
    }else{
      return alert("URL is Valid")
    }
  }
}
