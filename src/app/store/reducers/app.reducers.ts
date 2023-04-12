import { createReducer, on, Action } from '@ngrx/store';
import { initialAppState, IApp } from '../app.interface';
import { getToDoListSuccess, chooseSelectedToDo} from '../actions/app.actions';
import {ToDo} from "../../interfaces/ToDo";

export const userFeatureKey = 'AppState';

export const reducer = createReducer(
  initialAppState as IApp,
  on(getToDoListSuccess, (state, toDoList:any)=> ({
    ...state,
    toDoList : toDoList
  })),
  on(chooseSelectedToDo, (state, toDoItem:any)=> ({
    ...state,
    selectedToDoItem : toDoItem.selectedToDo
  })),


);

export function AppReducer(state: IApp, action: Action): IApp {
  return reducer(state as IApp, action as Action);
}
