import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
    employee = [
      {id:1, name:"Aaron"},
      {id:2, name:"Mary"},
      {id:3, name:"Luke"},
      {id:4, name:"Kate"},
      {id:5, name:"Chris"}
    ];

    id:string = '';
    name:string = '';

    constructor(private activeRouter:ActivatedRoute){ 
     this.activeRouter.queryParams.subscribe((params)=>{
        this.id = params['id'];
        this.name = params['name'];
        console.log(params);
     });
    }
}
