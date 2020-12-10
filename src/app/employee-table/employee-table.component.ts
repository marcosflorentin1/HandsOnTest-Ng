import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  headers = [
    'Id',
    'Name',
    'ContractTypeName',
    'RoleId',
    'RoleName',
    'RoleDescription',
    'AnnualSalary'
  ];
  @Input() employees: Employee[];

  constructor() { }

  ngOnInit(): void {
  }

}
