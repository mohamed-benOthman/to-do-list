import { ToDo } from '../interfaces/ToDo';

export interface IApp {
  toDoList: ToDo[];
  selectedToDoItem: ToDo;
}

export interface IAppState {
  AppState: IApp;
}

export const initialAppState: IApp = {
  toDoList: [],
  selectedToDoItem: null,
};
