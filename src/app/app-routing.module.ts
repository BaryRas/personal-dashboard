import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AddBookmarkComponent } from './pages/home/add-bookmark/add-bookmark.component';
import { ManageBookmarkComponent } from './pages/home/manage-bookmark/manage-bookmark.component';
import { AddTodoComponent } from './pages/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './pages/todos/edit-todo/edit-todo.component';
import { AddNoteComponent } from './pages/notes/add-note/add-note.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';
import { EditBookmarkComponent } from './pages/home/edit-bookmark/edit-bookmark.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'home/add-bookmark', component: AddBookmarkComponent },
  {
    path: 'home/manage-bookmark',
    component: ManageBookmarkComponent,
    children: [{ path: 'edit-bookmark/:id', component: EditBookmarkComponent }],
  },
  // {
  //   path: 'home/manage-bookmark/edit-bookmark',
  //   component: EditBookmarkComponent,
  // },
  { path: 'todos/add-todo', component: AddTodoComponent },
  { path: 'todos/edit-todo', component: EditTodoComponent },
  { path: 'notes/add-note', component: AddNoteComponent },
  { path: 'notes/edit-note', component: EditNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
