import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CatTierRoutingModule } from './cat-tier-routing.module';
import { CatTierComponent } from './cat-tier/cat-tier.component';
import { AddCatTierComponent } from './add-cat-tier/add-cat-tier.component';

@NgModule({
  imports: [
    CommonModule,
    CatTierRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CatTierComponent, AddCatTierComponent]
})
export class CatTierModule { }
