import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/todos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  checkTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, this.httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, this.httpOptions);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }
}
