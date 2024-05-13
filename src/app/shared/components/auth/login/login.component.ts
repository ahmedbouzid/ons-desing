import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
visible :boolean = false ;
userName :string =  ''
showDialog() {
  this.visible = !this.visible ;
}
}
