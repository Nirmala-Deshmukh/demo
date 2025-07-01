import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPolicyComponent } from './car-policy/car-policy.component';
import { HealthPolicyComponent } from './health-policy/health-policy.component';
import { TravelPolicyComponent } from './travel-policy/travel-policy.component';
import { BikePolicyComponent } from './bike-policy/bike-policy.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: "bike-policy", component: BikePolicyComponent },
  { path: "car-policy", component: CarPolicyComponent },
  { path: "health-policy", component: HealthPolicyComponent },
  { path: "travel-policy", component: TravelPolicyComponent },
];

@NgModule({
  declarations: [
    CarPolicyComponent,
    HealthPolicyComponent,
    TravelPolicyComponent,
    BikePolicyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class RenewalsModule { }
