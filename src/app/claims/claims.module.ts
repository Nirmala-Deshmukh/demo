import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorClaimsComponent } from './motor-claims/motor-claims.component';
import { HealthClaimsComponent } from './health-claims/health-claims.component';
import { TravelClaimsComponent } from './travel-claims/travel-claims.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes =[
  {path:'health-claim', component: HealthClaimsComponent},
  {path:'motor-claim', component: MotorClaimsComponent},
  {path: 'travel-claim', component:TravelClaimsComponent}
]

@NgModule({
  declarations: [
    MotorClaimsComponent,
    HealthClaimsComponent,
    TravelClaimsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})

export class ClaimsModule { }
