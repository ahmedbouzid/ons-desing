import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexrComponent } from './page/indexr/indexr.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IndexrComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports :[
    IndexrComponent,
  ]
})
export class LandingPageModule { }
