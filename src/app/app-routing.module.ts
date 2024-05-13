import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexrComponent } from './landing-page/page/indexr/indexr.component';

const routes: Routes = [
  // respresent the landing page
  { path:'' , component:IndexrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
