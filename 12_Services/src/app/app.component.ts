import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  employees:any = [];
  employee:any = [];
  isShow:boolean = false;
  constructor(private employeeService:EmployeeService){
      // this.employee = this.employeeService.getEmployee();
      // console.log(this.employee);
      
  }

  ngOnInit(): void {
    this.employees = this.employeeService.employees;
    console.log(this.employees);
    
  }

  SelectEmployee(Id:any){
    this.employee = this.employeeService.findEmployeeById(Id);
    console.log(this.employee);
    
    this.isShow = true;
  }
}
