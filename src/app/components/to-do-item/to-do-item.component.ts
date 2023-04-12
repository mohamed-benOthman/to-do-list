import { Component, OnInit, Input } from '@angular/core';
import {ToDo} from "../../interfaces/ToDo";
import {ToDoService} from "../../services/toDoService/to-do.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToDoModalComponent} from "../to-do-modal/to-do-modal.component";
import {AppFacade} from "../../store/facade/app.facade";

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input() toDoItem : ToDo ;

  constructor(private toDoService : ToDoService,
              private modalService: NgbModal,
              private appFacade: AppFacade
              ) { }

  ngOnInit(): void {
  }

  updateToDoItem(event){
    const toDoUpdated = {
      ...this.toDoItem,
      completed : event.target.checked
    }
    this.toDoService.updateToDoItem(toDoUpdated).subscribe(res=> console.log(res))
  }

  showDetails(){
    this.appFacade.setSelectedToDo(this.toDoItem)
    this.modalService.open(ToDoModalComponent)
  }



}
