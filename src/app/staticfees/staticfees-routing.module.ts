import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticfeesComponent } from './staticfees/staticfees.component';
import { AddstaticfeeComponent } from './addstaticfee/addstaticfee.component';

const routes: Routes = [
  {path: 'list',  component: StaticfeesComponent},
  {path: 'add',  component: AddstaticfeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticfeesRoutingModule { }
