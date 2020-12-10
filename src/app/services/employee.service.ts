import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl: string;

  constructor(private httpClient: HttpClient) {
    this.employeeUrl = 'http://localhost:64545/api/Employee';
  }

  getEmployees(): Promise<Employee[]> {
    return this.httpClient.get<Employee[]>(this.employeeUrl)
      .toPromise();
  }

  getEmployee(id): Promise<Employee> {
    return this.httpClient.get<Employee>(this.employeeUrl + '/' + id)
      .toPromise();
  }
}
