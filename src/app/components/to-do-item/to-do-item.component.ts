import { Component, OnInit, Input } from '@angular/core';
import {ToDo} from "../../interfaces/ToDo";

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input() toDoItem : ToDo ;

  constructor() { }

  ngOnInit(): void {
  }

}
