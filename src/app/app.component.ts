import { Component } from '@angular/core';
import { Employee } from './models/Employee';
import { EmployeeService } from './services/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-employee';
  showLoading: boolean = false;
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
  ) {
    
  }

  getEmployees(id: any) {
    this.showLoading = true;

    if (id) {
      this.employeeService.getEmployee(id)
        .then((employee) => {
          this.employees = [];

          if (employee) {
            this.employees.push(employee);
          }

          this.showLoading = false;
        });
    }
    else {
      this.employeeService.getEmployees()
        .then((employees) => {
          this.employees = employees;
          this.showLoading = false;
        });
    }  
  }
}
