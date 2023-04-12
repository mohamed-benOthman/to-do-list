import { createAction, props } from '@ngrx/store';
import { ToDo } from '../../interfaces/ToDo';

export const getToDoList = createAction('[ToDoList] get to do list');

export const getToDoListSuccess = createAction(
  '[ToDoList] get to do list Success',
  props<{ toDoList: any }>()
);

export const getToDoListFailed = createAction(
  '[ToDoList] get to do list Failed'
);

export const chooseSelectedToDo = createAction(
  '[ToDoList] choose Selected To Do',
  props<{ selectedToDo: ToDo }>()
);
