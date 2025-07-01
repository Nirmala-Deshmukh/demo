import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorInsuranceComponent } from './motor-insurance/motor-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';



@NgModule({
  declarations: [
    MotorInsuranceComponent,
    CarInsuranceComponent,
    BikeInsuranceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MotorModule { }
