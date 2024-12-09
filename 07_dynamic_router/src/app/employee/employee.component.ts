import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
   
  emp = [
    {deparment:"JAVA",empName:"Sankalp",empId:1},
    {deparment:"JS",empName:"Rohan",empId:2},
    {deparment:"Ruby",empName:"Kalyan",empId:3},
    {deparment:"C",empName:"Rohit",empId:4},
    {deparment:"C++",empName:"Prem",empId:5},
  ];
}
