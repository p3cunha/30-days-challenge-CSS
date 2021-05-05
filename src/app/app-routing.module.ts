import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { AnimatedLoaderComponent } from './components/animated-loader/animated-loader.component';
import { CardsComponent } from './components/cards/cards.component';
import { DivColorChangeComponent } from './components/div-color-change/div-color-change.component';
import { IconLayersComponent } from './components/icon-layers/icon-layers.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CardsComponent },
  { path: 'icon-layers', component: IconLayersComponent },
  { path: 'color-change', component: DivColorChangeComponent },
  { path: 'animated-loader', component: AnimatedLoaderComponent },
  { path: 'animated-button', component: AnimatedButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
