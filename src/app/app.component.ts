import { Component } from '@angular/core';
import {Todo} from './todo-item/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      new Todo('1', 'Task 1', '2'),
      new Todo('2', 'Task 2', '5'),
      new Todo('3', 'Task 3', '1'),
      new Todo('4', 'Task 4', '5'),
      new Todo('5', 'Task 5', '1'),
    ];
  }

  onAddTodo({ desc, priority }) {
    const newId = (this.todos.length + 1).toString();
    this.todos.push(new Todo(newId, desc, priority));
  }
}
