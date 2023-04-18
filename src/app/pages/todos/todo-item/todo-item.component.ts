import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/shared/todo.service';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {
    id: '',
    title: '',
    completed: false,
  };
  @Output() todoDeleted = new EventEmitter<Todo>();
  completed: string = '';

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    if (this.todo.completed) {
      this.completed = 'completed';
    }
  }

  onChecked(event: Event) {
    event.preventDefault();
    this.todo.completed = !this.todo.completed;
    this.completed = this.todo.completed ? 'completed' : '';
    this.todoService.checkTodo(this.todo).subscribe();
  }

  onDelete() {
    this.todoDeleted.emit(this.todo);
  }
}
