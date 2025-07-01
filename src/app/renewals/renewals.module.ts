import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPolicyComponent } from './car-policy/car-policy.component';
import { HealthPolicyComponent } from './health-policy/health-policy.component';
import { TravelPolicyComponent } from './travel-policy/travel-policy.component';
import { BikePolicyComponent } from './bike-policy/bike-policy.component';



@NgModule({
  declarations: [
    CarPolicyComponent,
    HealthPolicyComponent,
    TravelPolicyComponent,
    BikePolicyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RenewalsModule { }
