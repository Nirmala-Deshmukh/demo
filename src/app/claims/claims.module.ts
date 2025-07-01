import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorClaimsComponent } from './motor-claims/motor-claims.component';
import { HealthClaimsComponent } from './health-claims/health-claims.component';
import { TravelClaimsComponent } from './travel-claims/travel-claims.component';



@NgModule({
  declarations: [
    MotorClaimsComponent,
    HealthClaimsComponent,
    TravelClaimsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClaimsModule { }
