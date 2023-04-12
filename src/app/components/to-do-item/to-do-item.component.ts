import { Component, OnInit, Input } from '@angular/core';
import {ToDo} from "../../interfaces/ToDo";
import {ToDoService} from "../../services/toDoService/to-do.service";

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input() toDoItem : ToDo ;

  constructor(private toDoService : ToDoService) { }

  ngOnInit(): void {
  }

  updateToDoItem(event){
    const toDoUpdated = {
      ...this.toDoItem,
      completed : event.target.checked
    }
    this.toDoService.updateToDoItem(toDoUpdated).subscribe(res=> console.log(res))
  }



}
