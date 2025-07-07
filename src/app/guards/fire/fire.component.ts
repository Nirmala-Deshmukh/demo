import { Component } from '@angular/core';
import { CanComponentDeactivate } from 'src/app/shared/auth-guard.guard';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent  implements CanComponentDeactivate
{
  isFormDirty:boolean = true;
  canDeactivate()
  {
    return this.isFormDirty ? confirm('do you want to Abort the data?') : true;
  }

}
