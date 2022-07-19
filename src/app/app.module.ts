import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgrxTestModule} from "./ngrx-test/ngrx-test.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./app.store";
import {EffectsModule} from "@ngrx/effects";
import {IframeTestModule} from "./iframe-test/iframe-test.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgrxTestModule,
    IframeTestModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true },
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
