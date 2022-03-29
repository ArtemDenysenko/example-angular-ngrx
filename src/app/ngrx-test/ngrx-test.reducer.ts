import * as actions from './ngrx-test.actions';
import {createReducer, on, Action, createFeatureSelector} from '@ngrx/store';

export interface State {
  username: string;
  count: number;
  showSpinner: boolean;
}

export const initialState: State = {
  username: 'Default',
  count: 0,
  showSpinner: true,
};

export const testReducer = createReducer(
  initialState,
  on(actions.ngrxTestIncrease, state => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(actions.ngrxTestAddName, (state, action) => ({
    ...state,
    username: action.name
  })),
  on(actions.ngrxTestSpinnerShow, (state, action) => ({
    ...state,
    showSpinner: action.showSpinner
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return testReducer(state, action);
}

export const getState = createFeatureSelector<State>('test');
