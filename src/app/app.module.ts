import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconLayersComponent } from './components/icon-layers/icon-layers.component';
import { CardsComponent } from './components/cards/cards.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AnimatedLoaderComponent } from './components/animated-loader/animated-loader.component';
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { DivColorChangeComponent } from './components/div-color-change/div-color-change.component';

@NgModule({
  declarations: [
    AppComponent,
    IconLayersComponent,
    CardsComponent,
    ToolbarComponent,
    AnimatedLoaderComponent,
    AnimatedButtonComponent,
    DivColorChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
