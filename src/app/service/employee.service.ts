import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BASE_URL = "http://localhost:8090/api/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.BASE_URL);
  }
}
