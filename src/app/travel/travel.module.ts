import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { GoldMultiTripComponent } from './gold-multi-trip/gold-multi-trip.component';
import { StudentTripComponent } from './student-trip/student-trip.component';



@NgModule({
  declarations: [
    SingleTripComponent,
    GoldMultiTripComponent,
    StudentTripComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TravelModule { }
