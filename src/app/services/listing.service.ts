import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee, EmployeeDetails } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private _httpClient: HttpClient) { }
  employeeDetails = new BehaviorSubject([]);
  employee = this.employeeDetails.asObservable();

  updateUser(event) {
    this.employeeDetails.next(event);
  }

  getDetails(): Observable<any> {
    const href = 'http://dummy.restapiexample.com/api/v1/employees';
    const requestUrl = `${href}`;

    return this._httpClient.get<any>(requestUrl);
  }
  getEmployeeDetails() {
    return [];
  }
}
