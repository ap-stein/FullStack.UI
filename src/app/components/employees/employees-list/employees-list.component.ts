import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  /*
  employees: Employee[] = [
    {
      id: 'a0dd8548-7e5d-43c7-910c-302547d28cbb',
      name: 'John Doe',
      email: 'a@b.com',
      phone: 1111111111,
      salary: 200000,
      department: 'Human Resources'
    },
    {
      id: '3b5608b9-9e54-4a83-8784-8526e3ba53f2',
      name: 'Robert Smith',
      email: 'x@y.com',
      phone: 9999999999,
      salary: 400000,
      department: 'IT'
    },
    {
      id: 'a234e893-157b-4530-b93b-e275e1f98929',
      name: 'Inger Moeller',
      email: 'm@n.com',
      phone: 5555555555,
      salary: 700000,
      department: 'Payroll'
    }
  ];
  */

  employees: Employee[] = [];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        console.log(employees);
      },
      error: (response) => {
        console.log(response);
      }
    });
    //this.employees.push()
  }

}
