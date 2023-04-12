import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ToDo} from "../../interfaces/ToDo";
import {Observable, map, takeUntil} from "rxjs";
import {AppFacade} from "../../store/facade/app.facade";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input()  toDoList : ToDo[];
  currentToDOList : ToDo[] = []
  completedToDoList : ToDo[] = []
  constructor(private appFacade : AppFacade) { }

  ngOnInit(): void {
    this.appFacade.getToDoList().subscribe((items: ToDo[])=> {
      this.completedToDoList = items.filter((item: ToDo)=>  item.completed)
      this.currentToDOList = items.filter((item: ToDo)=> !item.completed)
    })
  }





}
