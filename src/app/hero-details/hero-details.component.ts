import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.listingService.employee.subscribe(value => {console.log(value);})
    // this.listingService.getEmployeeDetails();
  }

}
