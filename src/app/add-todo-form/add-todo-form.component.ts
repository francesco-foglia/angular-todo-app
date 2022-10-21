import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddTodo(desc: HTMLInputElement, priority: HTMLInputElement) {
    const newTodo: any = {
      desc: desc.value,
      priority: priority.value,
    };
    this.newTodo.emit(newTodo);
  }

}
