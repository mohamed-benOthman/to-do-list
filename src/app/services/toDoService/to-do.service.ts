import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../../interfaces/ToDo';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private httpClient: HttpClient) {}

  getToDoList() {
    return this.httpClient.get(`${environment.baseUrl}to-do-list`);
  }

  updateToDoItem(item: ToDo) {
    return this.httpClient.put(
      `${environment.baseUrl}toDoItems/${item.id}`,
      item
    );
  }

  addToDoItem(item: ToDo) {
    return this.httpClient.post(`${environment.baseUrl}toDoItems`, item);
  }

  deleteToDoItem(toDoId: number) {
    return this.httpClient.delete(`${environment.baseUrl}toDoItems/${toDoId}`);
  }
}
