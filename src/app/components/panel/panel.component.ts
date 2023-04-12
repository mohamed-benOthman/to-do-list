import { Component, OnInit, Input } from '@angular/core';
import {ToDo} from "../../interfaces/ToDo";
import {Observable, map} from "rxjs";
import {AppFacade} from "../../store/facade/app.facade";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input()  toDoList : ToDo[];
  toDoList$ : Observable<ToDo[] >
  constructor(private appFacade : AppFacade) { }

  ngOnInit(): void {
    this.toDoList$ = this.appFacade.getToDoList();
  }



}
