import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType,} from '@ngrx/effects';
import {map, withLatestFrom,} from 'rxjs/operators';
import * as testAction from './ngrx-test.actions';
import {NgrxTestService} from "./ngrx-test.service";

@Injectable()
export class NgrxTestEffects {
  switchSpinner = createEffect(
    () =>
      this.actions$.pipe(
        ofType(testAction.ngrxTestSpinnerClick),
        withLatestFrom(this.testService.showSpinner$),
        map(([action, showSpinner]) => {
          const newSpinnerState = !showSpinner;
          return testAction.ngrxTestSpinnerShow({showSpinner: newSpinnerState});
        }),
      ),
  );

  constructor(
    private actions$: Actions,
    private testService: NgrxTestService,
  ) {
  }
}
