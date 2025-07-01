import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { GoldMultiTripComponent } from './gold-multi-trip/gold-multi-trip.component';
import { StudentTripComponent } from './student-trip/student-trip.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: "gold-multi-trip", component: GoldMultiTripComponent },
  { path: "single-trip", component: SingleTripComponent },
  { path: "student-trip", component: StudentTripComponent },
];

@NgModule({
  declarations: [
    SingleTripComponent,
    GoldMultiTripComponent,
    StudentTripComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class TravelModule { }
