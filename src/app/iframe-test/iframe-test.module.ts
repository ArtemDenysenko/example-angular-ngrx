import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IFrameTestComponent} from "./iframe-test.component";


@NgModule({
  declarations: [IFrameTestComponent,
  ],
  exports: [IFrameTestComponent],
  imports: [
    CommonModule
  ]
})
export class IframeTestModule {
}
