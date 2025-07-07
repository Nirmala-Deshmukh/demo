import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SmeComponent } from './guards/sme/sme.component';
import { CorporateComponent } from './guards/corporate/corporate.component';
import { MarineComponent } from './guards/marine/marine.component';
import { FireComponent } from './guards/fire/fire.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './thirdPartyLibrary/chart/chart.component';
import { PrimengComponent } from './thirdPartyLibrary/primeng/primeng.component';
import { AngularMaterialComponent } from './thirdPartyLibrary/angular-material/angular-material.component';
import { CookieServicesComponent } from './thirdPartyLibrary/cookie-services/cookie-services.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SmeComponent,
    CorporateComponent,
    MarineComponent,
    FireComponent,
    ChartComponent,
    PrimengComponent,
    AngularMaterialComponent,
    CookieServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    ButtonModule,
    BrowserAnimationsModule,
      MatButtonModule,
    MatToolbarModule,
     MatInputModule,
     FormsModule,

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
