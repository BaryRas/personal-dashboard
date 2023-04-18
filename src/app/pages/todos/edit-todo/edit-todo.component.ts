import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/shared/todo.service';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  todo: Todo = {
    id: '',
    title: '',
    completed: false,
  };

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.getTodoById(id).subscribe((todo) => {
        this.todo = todo;
      });
    }
  }

  onSave(event: Event) {
    event.preventDefault();
    this.todoService.checkTodo(this.todo).subscribe();
    this.router.navigate(['todos']);
  }
}
