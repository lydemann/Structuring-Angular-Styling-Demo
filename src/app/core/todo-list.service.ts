import { Injectable } from '@angular/core';
import { TODOItem } from '../shared/models/todo-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoListService {

    public todoList: TODOItem[] = [];
    private todoListUrl = '//localhost:8080/todo-list';

    constructor(httpClient: HttpClient) {
         httpClient.get<Array<TODOItem>>(this.todoListUrl).subscribe(data => {
            this.todoList = data;
        });
    }
}
