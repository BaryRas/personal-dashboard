import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  onTodoDeleted(todo: Todo) {
    this.todoService
      .deleteTodo(todo)
      .subscribe(
        () => (this.todos = this.todos.filter((t) => t.id !== todo.id))
      );
  }
}
