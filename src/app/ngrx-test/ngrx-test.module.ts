import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgrxTestComponent} from './ngrx-test.component';
import {NgrxEntitiesComponent} from '../ngrx-entities/ngrx-entities.component';
import {StoreModule} from "@ngrx/store";
import * as fromStore from './ngrx-test.reducer';
import {NgrxTestService} from "./ngrx-test.service";
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import {NgrxTestEffects} from "./ngrx-test.effects";
import {IFrameTestComponent} from "../iframe-test/iframe-test.component";

@NgModule({
  declarations: [NgrxTestComponent, NgrxEntitiesComponent, IFrameTestComponent],
  exports: [
    NgrxTestComponent,
    NgrxEntitiesComponent,
    IFrameTestComponent,
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
