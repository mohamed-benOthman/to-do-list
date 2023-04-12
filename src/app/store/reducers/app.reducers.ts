import { createReducer, on, Action } from '@ngrx/store';
import { initialAppState, IApp } from '../app.interface';
import { getToDoListSuccess} from '../actions/app.actions';

export const userFeatureKey = 'AppState';

export const reducer = createReducer(
  initialAppState as IApp,
  on(getToDoListSuccess, (state, toDoList:any)=> ({
    ...state,
    toDoList : toDoList
  })),
);

export function AppReducer(state: IApp, action: Action): IApp {
  return reducer(state as IApp, action as Action);
}
