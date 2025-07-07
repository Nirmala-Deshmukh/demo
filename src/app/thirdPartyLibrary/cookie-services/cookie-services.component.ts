import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-services',
  templateUrl: './cookie-services.component.html',
  styleUrls: ['./cookie-services.component.css']
})
export class CookieServicesComponent {
  name: string = '';
  cookieValue: string = '';

  constructor(private cookieService: CookieService) { }

  setCookie() {
    this.cookieService.set('username', this.name, 7); // Expires in 7 days
  }

  getCookie() {
    this.cookieValue = this.cookieService.get('username');
  }

  deleteCookie() {
    this.cookieService.delete('username');
    this.cookieValue = '';
  }
}
