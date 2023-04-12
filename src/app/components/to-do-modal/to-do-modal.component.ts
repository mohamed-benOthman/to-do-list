import { Component, OnInit } from '@angular/core';
import {AppFacade} from "../../store/facade/app.facade";
import {ToDo} from "../../interfaces/ToDo";

@Component({
  selector: 'app-to-do-modal',
  templateUrl: './to-do-modal.component.html',
  styleUrls: ['./to-do-modal.component.scss']
})
export class ToDoModalComponent implements OnInit {
  selectedToDo: ToDo
  constructor(private appFacade : AppFacade) { }

  ngOnInit(): void {
    this.appFacade.getSelectedToDo().subscribe((res: ToDo)=> {
      console.warn(res);
      this.selectedToDo = res
    } )
  }

}
