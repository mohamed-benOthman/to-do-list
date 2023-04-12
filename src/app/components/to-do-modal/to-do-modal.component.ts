import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppFacade } from '../../store/facade/app.facade';
import { ToDo } from '../../interfaces/ToDo';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-to-do-modal',
  templateUrl: './to-do-modal.component.html',
  styleUrls: ['./to-do-modal.component.scss'],
})
export class ToDoModalComponent implements OnInit, OnDestroy {
  selectedToDo: ToDo;
  destroyed$ = new Subject();

  constructor(private appFacade: AppFacade) {}

  ngOnInit(): void {
    this.appFacade
      .getSelectedToDo()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res: ToDo) => {
        this.selectedToDo = res;
      });
  }

  ngOnDestroy() {
    this.destroyed$.unsubscribe();
  }
}
