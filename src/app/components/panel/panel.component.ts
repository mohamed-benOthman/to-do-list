import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ToDo } from '../../interfaces/ToDo';
import { Subject, takeUntil } from 'rxjs';
import { AppFacade } from '../../store/facade/app.facade';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, OnDestroy {
  toDoList: ToDo[];
  destroyed$ = new Subject();
  constructor(private appFacade: AppFacade) {}

  ngOnInit(): void {
    this.appFacade
      .getToDoList()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((toDoList: ToDo[]) => {
        this.toDoList = toDoList
          ?.slice()
          .sort((a: ToDo, b: ToDo) => b.id - a.id);
      });
  }

  ngOnDestroy() {
    this.destroyed$.unsubscribe();
  }
}
