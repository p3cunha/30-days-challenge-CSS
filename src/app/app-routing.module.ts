import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimatedLoaderComponent } from './components/animated-loader/animated-loader.component';
import { CardsComponent } from './components/cards/cards.component';
import { IconLayersComponent } from './components/icon-layers/icon-layers.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CardsComponent },
  { path: 'icon-layers', component: IconLayersComponent },
  { path: 'animated-loader', component: AnimatedLoaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
