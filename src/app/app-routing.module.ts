import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FestivesComponent } from './festives/festives.component';


const routes: Routes = [{path: '', component: FestivesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
