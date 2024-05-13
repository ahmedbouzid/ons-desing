import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userName : string = '' ;

  visible : boolean = false ;

  showDialog() {
    this.visible = !this.visible ;
   }
}
