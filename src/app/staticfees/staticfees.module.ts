import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaticfeesRoutingModule } from './staticfees-routing.module';
import { StaticfeesComponent } from './staticfees/staticfees.component';
import { AddstaticfeeComponent } from './addstaticfee/addstaticfee.component';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  imports: [
    CommonModule,
    StaticfeesRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [StaticfeesComponent, AddstaticfeeComponent]
})
export class StaticfeesModule { }
