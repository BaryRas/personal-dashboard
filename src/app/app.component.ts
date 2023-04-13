import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';
  currentTime: string;
  currentDate: string;
  currentLink = '';

  constructor() {
    const date = new Date();
    this.currentTime = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    this.currentDate = date.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setInterval(() => {
      const date = new Date();
      this.currentTime = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }, 1000);
  }

  setCurrentLink(link: string) {
    this.currentLink = link;
  }
}
