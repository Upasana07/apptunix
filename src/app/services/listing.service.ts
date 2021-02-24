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
    localStorage.setItem('isPresent', 'true');
  }
  getDetails(): Observable<any> {
    const href = 'http://www.appgrowthcompany.com:5069/api/v1/employee/getAll ';
    return this._httpClient.get<any>(href);
  }
  getEmployeeDetails(id) {
    const href = 'http://www.appgrowthcompany.com:5069/api/v1/employee/get';
    const requestUrl = `${href}/${id}`;
    return this._httpClient.get<any>(requestUrl);
  }
}
