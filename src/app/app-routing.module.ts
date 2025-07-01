import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  // implementation of claims module
  {
    path: 'claimInc', loadChildren: () => import('./claims/claims.module')
      .then(mod => mod.ClaimsModule)
  },
  //implementation of health module
  {
    path: 'healthInc', loadChildren: () => import("./health/health.module")
      .then(mod => mod.HealthModule)
  },
  //implementation of motor module
  {
    path: "motorInc", loadChildren: () => import('./motor/motor.module')
      .then(mod => mod.MotorModule)
  },
    //implementation of renewals module
  {
    path: "renewalsInc", loadChildren: () => import('./renewals/renewals.module')
      .then(mod => mod.RenewalsModule)
  },
    //implementation of travel module
  {
    path: "travelInc", loadChildren: () => import('./travel/travel.module')
      .then(mod => mod.TravelModule)
  },

  // wild card
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
