import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private apiUrl = 'http://localhost:5000/bookmarks';

  constructor(private http: HttpClient) {}

  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.apiUrl);
  }

  addBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(this.apiUrl, bookmark);
  }

  updateBookmark(bookmark: Bookmark): Observable<Bookmark> {
    const url = `${this.apiUrl}/${bookmark.id}`;
    return this.http.put<Bookmark>(url, bookmark);
  }

  deleteBookmark(bookmark: Bookmark): Observable<any> {
    const url = `${this.apiUrl}/${bookmark.id}`;
    return this.http.delete(url);
  }
}
