import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxProtectComponent } from './max-protect/max-protect.component';
import { PersonalProtectComponent } from './personal-protect/personal-protect.component';
import { RouterModule, Routes } from '@angular/router';
import { goldenShieldComponent } from './golden-shield/golden-shield.component';

const route: Routes = [
  { path: 'golden-shield', component: goldenShieldComponent },
  { path: 'max-protect', component: MaxProtectComponent },
  { path: 'personal-protect', component: PersonalProtectComponent }
]

@NgModule({
  declarations: [
    goldenShieldComponent,
    MaxProtectComponent,
    PersonalProtectComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HealthModule { }
