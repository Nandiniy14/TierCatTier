import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatTierComponent } from './cat-tier/cat-tier.component';
import { AddCatTierComponent } from './add-cat-tier/add-cat-tier.component';

const routes: Routes = [
  {path: 'tier',  component: CatTierComponent},
  {path: 'addTier',  component: AddCatTierComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatTierRoutingModule { }
