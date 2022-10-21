import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo-item/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      { id: '1', desc: 'Task 1', date: new Date(), priority: 2, completed: false },
      { id: '2', desc: 'Task 2', date: new Date(), priority: 5, completed: false },
      { id: '3', desc: 'Task 3', date: new Date(), priority: 1, completed: false },
      { id: '4', desc: 'Task 4', date: new Date(), priority: 5, completed: false },
      { id: '5', desc: 'Task 5', date: new Date(), priority: 1, completed: false },
    ];
  }

  ngOnInit(): void {
  }

}
