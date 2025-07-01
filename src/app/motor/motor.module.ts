import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorInsuranceComponent } from './motor-insurance/motor-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {path:'bike-inc',component: BikeInsuranceComponent},
  {path:'car-inc',component: CarInsuranceComponent},
  {path:'motor-inc',component: MotorInsuranceComponent},
];

@NgModule({
  declarations: [
    MotorInsuranceComponent,
    CarInsuranceComponent,
    BikeInsuranceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class MotorModule { }
