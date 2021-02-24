import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { HeroDetailsComponent } from './hero-details.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [HeroDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [HeroDetailsComponent]
})
export class HeroDetailsModule { }
