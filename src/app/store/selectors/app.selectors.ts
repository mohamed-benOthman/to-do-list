import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAppState} from "../app.interface";

const appSelectors = createFeatureSelector<IAppState>('AppState');
export const selectToDoList = createSelector(
  appSelectors,
  (state: any) => {
    return state.toDoList.toDoList
  }
)
