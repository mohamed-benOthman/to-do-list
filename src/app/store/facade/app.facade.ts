import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as AppActions from '../actions/app.actions'
import * as AppSelectors from '../selectors/app.selectors'
import {IAppState} from "../app.interface";
import {Observable} from "rxjs";
import {ToDo} from "../../interfaces/ToDo";
@Injectable({
  providedIn: 'root'
})
export class AppFacade {

  constructor(private store: Store<IAppState>) {

  }

  setToDoList(){
    return this.store.dispatch(AppActions.getToDoList())
  }

  getToDoList(): Observable<ToDo[]>{
    return this.store.select(AppSelectors.selectToDoList)
  }

}
