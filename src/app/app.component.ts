import { Component, OnInit } from '@angular/core';
import {ToDoService} from "./services/toDoService/to-do.service";
import {AppFacade} from "./store/facade/app.facade";
import {Observable} from "rxjs";
import {ToDo} from "./interfaces/ToDo";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddToDoModalComponent} from "./components/add-to-do-modal/add-to-do-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'to-do-list';
  toDoList$ : Observable<ToDo[]>
  constructor(private appFacade : AppFacade,
               private modalService: NgbModal,
              ) {}


  ngOnInit(){
     this.appFacade.setToDoList()
  }

  openAddModal():void{
      this.modalService.open(AddToDoModalComponent)
  }
}
