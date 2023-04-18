import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/shared/todo.service';
import { Todo } from 'src/app/shared/todo.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  addTodo: Todo = {
    id: uuidv4(),
    title: '',
    completed: false,
  };

  @ViewChild('myForm') myForm!: NgForm;

  constructor(private todoService: TodoService, private router: Router) {}

  onCreateTodo() {
    // Récupérer les erreurs
    const name = this.myForm.form.controls['text'];
    const errors = name.errors;
    // const nameRequired = errors?.['required'];
    // const minlengthError = errors?.['minlength'];

    if (errors) {
      console.log(name.errors);
      return;
    } else {
      this.todoService.createTodo(this.addTodo).subscribe();
      this.router.navigate(['/todos']);
    }
  }
}
