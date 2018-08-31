import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiersComponent } from './tiers/tiers.component';
import { AddTierComponent } from './add-tier/add-tier.component';

const routes: Routes = [
  {path: 'tiers',  component: TiersComponent},
  {path: 'addTier',  component: AddTierComponent},
  {path: 'addCatTier',  component: AddTierComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiersRoutingModule { }
