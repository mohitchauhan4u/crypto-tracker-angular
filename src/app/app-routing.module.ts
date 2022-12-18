import { CoinDetailComponent } from './views/coin-detail/coin-detail.component';
import { CoinListComponent } from './views/coin-list/coin-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'coin-list', pathMatch: 'full' },
  { path: 'coin-list', component: CoinListComponent },
  { path: 'coin-detail/:id', component: CoinDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
