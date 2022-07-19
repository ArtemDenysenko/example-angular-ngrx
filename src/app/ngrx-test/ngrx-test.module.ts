import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgrxTestComponent} from './ngrx-test.component';
import {StoreModule} from "@ngrx/store";
import * as fromStore from './ngrx-test.reducer';
import {NgrxTestService} from "./ngrx-test.service";
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import {NgrxTestEffects} from "./ngrx-test.effects";

@NgModule({
  declarations: [NgrxTestComponent],
  exports: [
    NgrxTestComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('test', fromStore.reducer),
    EffectsModule.forFeature([NgrxTestEffects])
  ],
  providers: [NgrxTestService],
})
export class NgrxTestModule {
}
