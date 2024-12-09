import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    {
      id:1,
      name:'Alex',
      deparment:'Sales Dept',
      location:'Paris',
      phone:'123-868-1213'
    },
    {
      id:2,
      name:'Olive',
      deparment:'HR Dept',
      location:'Ohio',
      phone:'973-728-727'
    },
    {
      id:3,
      name:'James',
      deparment:'Admin Dept',
      location:'Washington',
      phone:'464-644-4664'
    },
    {
      id:4,
      name:'Ricky',
      deparment:'Sport Dept',
      location:'Austrila',
      phone:'083-729-8375'
    },
  ];


  findEmployeeById(id:any){
    let emp = this.employees.find((emp)=> emp.id === id);
    if(emp != undefined){
      return emp;
    }
    return false;
  }
}
