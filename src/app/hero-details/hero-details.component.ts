import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  employeeId;
  employeeDetails;
  constructor(private listingService: ListingService, private router: Router) { }

  ngOnInit(): void {
    this.listingService.employee.subscribe(value => {
      this.employeeId = value['id'];
    });
    this.listingService.getEmployeeDetails(this.employeeId).subscribe(res => { console.log(res); this.employeeDetails = res.data });
  }
  goBack(){
    this.router.navigate(['']);
    localStorage.removeItem('isPresent');
  }
}
