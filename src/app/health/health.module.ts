import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GolderShieldComponent } from './golder-shield/golder-shield.component';
import { MaxProtectComponent } from './max-protect/max-protect.component';
import { PersonalProtectComponent } from './personal-protect/personal-protect.component';



@NgModule({
  declarations: [
    GolderShieldComponent,
    MaxProtectComponent,
    PersonalProtectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HealthModule { }
