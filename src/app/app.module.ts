import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/shared/header/header.component';
import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    StoreModule.forRoot({router: routerReducer}, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictActionTypeUniqueness: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
