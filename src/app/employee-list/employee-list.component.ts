import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  constructor(private employeeService: EmployeeService){}

  employees: Employee[]=[];

  ngOnInit(){

    this.employeeService.getEmployees().subscribe(data => {
      data.forEach((employee)=>console.log(employee));
      this.employees= data;
      })
    }
  
  }

    //  this.employees=[
    //     {id: 1,name: 'aishu', salary: 50000, department: 'IT'},
    //     {id: 2,name: 'binu', salary: 30000, department: 'IT'}
    //  ];
  // }


