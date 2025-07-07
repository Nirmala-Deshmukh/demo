import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
  name = '';
  greeting = '';

  sayHello() {
    this.greeting = this.name ? `Hello, ${this.name}! 👋` : 'Please enter your name.';
  }
}
