import { Component, OnInit } from '@angular/core';
import {ToDoService} from "./services/toDoService/to-do.service";
import {AppFacade} from "./store/facade/app.facade";
import {Observable} from "rxjs";
import {ToDo} from "./interfaces/ToDo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'to-do-list';
  toDoList$ : Observable<ToDo[]>
  constructor(private appFacade : AppFacade) {}


  ngOnInit(){
     this.appFacade.setToDoList()
  }
}
