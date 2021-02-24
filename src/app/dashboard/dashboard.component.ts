import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable, of } from 'rxjs';
import { ListingService } from '../services/listing.service';
import { Employee, EmployeeDetails } from '../models/employee';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'details'];
  dataSource: MatTableDataSource<Employee>;
  errorPresent: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router, private listingService: ListingService,private snackBar: MatSnackBar) { }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.listingService.getDetails().subscribe((res) => {
      if (res.data) {
        this.dataSource = new MatTableDataSource(res.data);
        setTimeout(() => {
          debugger
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 200);
      }
    }, (err) => {
      this.errorPresent = true;
      this.snackBar.open(err.message, '', {
        duration: 3000,
      });
    });
  }
  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEmployeeData(event) {
    this.router.navigate(['/hero-details']);
    this.listingService.updateUser(event);
  }
}
