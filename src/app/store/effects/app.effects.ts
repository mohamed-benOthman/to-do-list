
import {Injectable} from '@angular/core';
import {ToDoService} from "../../services/toDoService/to-do.service";
import {getToDoList, getToDoListSuccess, getToDoListFailed} from '../actions/app.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private toDoService: ToDoService
  ) {
  }
  loadToDoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getToDoList),
      switchMap(() => this.toDoService.getToDoList().pipe(
        map(toDoItems => getToDoListSuccess({toDoList: toDoItems})),
        catchError((e) => {
          return of(getToDoListFailed())
        })
      ))
    )
  );
}
