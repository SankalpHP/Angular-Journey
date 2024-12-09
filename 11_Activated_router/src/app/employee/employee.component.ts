import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
   
  id:string = '';
  name:string = '';

  constructor(private activatedRoute:ActivatedRoute){
     const param = this.activatedRoute.snapshot.params;
     this.id = param['id'];  
     this.name = param['name'];
  }
}
