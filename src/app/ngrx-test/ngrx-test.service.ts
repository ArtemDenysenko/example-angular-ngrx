import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {StoreModel} from "../app.store";
import {Observable} from "rxjs";
import * as fromTest from './ngrx-test.reducer';
import * as testActions from './ngrx-test.actions';
import {map} from "rxjs/operators";

@Injectable()
export class NgrxTestService {
  constructor(private store: Store<StoreModel>) {
  }

  get state$(): Observable<fromTest.State> {
    return this.store.select('test');
  }

  get count$(): Observable<number> {
    return this.state$.pipe(
      map(state => state.count)
    );
  }

  get showSpinner$(): Observable<boolean> {
    return this.state$.pipe(
      map(state => state.showSpinner)
    );
  }

  get username$(): Observable<string> {
    return this.state$.pipe(
      map(state => state.username)
    );
  }

  get spinnerLabel$(): Observable<string> {
    return this.state$.pipe(
      map(state => {
        return state.showSpinner ? 'Stop' : 'Show';
      })
    );
  }

  increaseCount(){
    this.store.dispatch(testActions.ngrxTestIncrease());
  }

  switchSpinner(){
    this.store.dispatch(testActions.ngrxTestSpinnerClick());
  }

  setName(name: string){
    console.log(name);
    this.store.dispatch(testActions.ngrxTestAddName({ name }));
  }
}
