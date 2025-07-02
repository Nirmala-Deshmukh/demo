import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private router: Router) {
}
navigateToSme(event: MouseEvent) {
  event.preventDefault(); // Prevent default anchor behavior
  this.router.navigate(['/sme']);
}
}
