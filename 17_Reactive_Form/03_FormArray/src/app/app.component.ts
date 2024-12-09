import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03_FormArray';

  employeeForm:FormGroup;

  constructor(){
     this.employeeForm = new FormGroup({
       employees:new FormArray([]),
     });
  }

  get employees():FormArray{
     return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee():void{
    const employeeGroup = new FormGroup({
      name:new  FormControl(''),
      job:new FormControl('')
    });
    this.employees.push(employeeGroup);
  }

  submitForm(){
    console.log(this.employeeForm.value);
  }
}
