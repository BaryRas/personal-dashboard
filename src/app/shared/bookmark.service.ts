import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
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

  getBookmarkById(id: string): Observable<Bookmark> {
    return this.http.get<Bookmark>(`${this.apiUrl}/${id}`);
  }

  addBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(this.apiUrl, bookmark);
  }

  updateBookmark(bookmark: Bookmark): Observable<Bookmark> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    const url = `${this.apiUrl}/${bookmark.id}`;
    return this.http.put<Bookmark>(url, bookmark, httpOptions);
    // .pipe(
    //   tap(res => console.log(res)),
    //   catchError(err => console.error('put error',err))
    // );
  }

  deleteBookmark(bookmark: Bookmark): Observable<any> {
    const url = `${this.apiUrl}/${bookmark.id}`;
    return this.http.delete(url);
  }
}
