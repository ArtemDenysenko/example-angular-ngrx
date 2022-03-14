import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as fromTest from './ngrx-test/ngrx-test.reducer';
import {storeLogger} from "ngrx-store-logger";
import {environment} from "../environments/environment";

export interface StoreModel {
  // GLOBAL
  test: fromTest.State,
}

export const reducers: ActionReducerMap<StoreModel> = {
  test: fromTest.reducer,
};


export function logger(reducer: ActionReducer<StoreModel>): ActionReducer<StoreModel> {
  return storeLogger({ collapsed: true })(reducer);
}

export const metaReducers: MetaReducer<StoreModel>[] = [logger]
