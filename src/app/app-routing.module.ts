import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CorporateComponent } from './guards/corporate/corporate.component';
import { SmeComponent } from './guards/sme/sme.component';
import { authCanLoadGuard, authChildGuard, authGuard } from './shared/auth-guard.guard';
import { FireComponent } from './guards/fire/fire.component';
import { MarineComponent } from './guards/marine/marine.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  // implementation on guards
  { path: 'corporate', component: CorporateComponent, canActivate:[authGuard]},
  { path: 'sme', canActivateChild:[authChildGuard],
    children:[
      {path:'', component: SmeComponent},
      {path:'fire', component: FireComponent},
      {path:'marine', component: MarineComponent}
    ]
  },

  // implementation of claims module
  {
    path: 'claimInc', loadChildren: () => import('./claims/claims.module')
      .then(mod => mod.ClaimsModule), canLoad:[authCanLoadGuard]
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
