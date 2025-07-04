import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marine',
  templateUrl: './marine.component.html',
  styleUrls: ['./marine.component.css']
})
export class MarineComponent {

  constructor(private actRoute: ActivatedRoute) {
    console.log("Testing the resolver");
    this.actRoute.data.subscribe((res: any) => {
      console.log(res);
    })
  }

}
