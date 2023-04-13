import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotesComponent } from './pages/notes/notes.component';
import { TodoItemComponent } from './pages/todos/todo-item/todo-item.component';
import { AddTodoComponent } from './pages/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './pages/todos/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './pages/home/add-bookmark/add-bookmark.component';
import { ManageBookmarkComponent } from './pages/home/manage-bookmark/manage-bookmark.component';
import { EditBookmarkComponent } from './pages/home/edit-bookmark/edit-bookmark.component';
import { TileBookmarkComponent } from './pages/home/tile-bookmark/tile-bookmark.component';
import { AddNoteComponent } from './pages/notes/add-note/add-note.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';
import { CardNoteComponent } from './pages/notes/card-note/card-note.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    NotesComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarkComponent,
    EditBookmarkComponent,
    TileBookmarkComponent,
    AddNoteComponent,
    EditNoteComponent,
    CardNoteComponent,
    NotificationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
