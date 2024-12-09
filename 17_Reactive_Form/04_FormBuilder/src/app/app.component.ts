import { Component } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03_FormArray';

  employeeForm:FormGroup;

  constructor(private fb:FormBuilder){
     this.employeeForm = this.fb.group({
       employees:this.fb.array([]),
     });
  }

  get employees():FormArray{
     return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee():void{
    const employeeGroup = this.fb.group({
      name:[''],
      job:['']
    });
    this.employees.push(employeeGroup);
  }

  submitForm(){
    console.log(this.employeeForm.value);
  }
}
