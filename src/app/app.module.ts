import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgrxTestModule} from "./ngrx-test/ngrx-test.module";
import {NgrxEntitiesModule} from "./ngrx-entities/ngrx-entities.module";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./app.store";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgrxTestModule,
    NgrxEntitiesModule,
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
