import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../core/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { TiersRoutingModule } from './tiers-routing.module';
import { TiersComponent } from './tiers/tiers.component';
import { AddTierComponent } from './add-tier/add-tier.component';
import { AddCatTierComponent } from './add-cat-tier/add-cat-tier.component';

@NgModule({
  imports: [
    CommonModule,
    TiersRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [TiersComponent, AddTierComponent, AddCatTierComponent]
})
export class TiersModule { }
