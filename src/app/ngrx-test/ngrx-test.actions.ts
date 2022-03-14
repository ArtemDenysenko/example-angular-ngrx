import {createAction, props} from '@ngrx/store';

// increase count action
export const ngrxTestIncrease = createAction('[NGRX Test] Increase count');

// set name action with payload
export const ngrxTestAddName = createAction(
  '[NGRX Test] Set name',
  props<{ name: string }>(),
);

// actions for effects
export const ngrxTestSpinnerClick = createAction('[NGRX Test] Spinner clicked');
export const ngrxTestSpinnerShow = createAction(
  '[NGRX Test] Show Spinner',
  props<{ showSpinner: boolean }>(),
);
