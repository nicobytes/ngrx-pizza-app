import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { RootRoutingModule } from './root-routing.module';
import { reducers, CustomRouterSerializer } from './store/root.state';
import { AppComponent } from './containers/app/app.component';

import { environment } from './../../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    (!environment.production) ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomRouterSerializer }
  ],
  bootstrap: [AppComponent]
})
export class RootModule { }
