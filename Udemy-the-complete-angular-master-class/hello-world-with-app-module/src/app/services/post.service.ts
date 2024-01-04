// post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../app-errror';
import { BadInput } from '../bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  create(post: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  update(post: any): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/${post.id}`, { isRead: true })
      .pipe(catchError(this.handleError));
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    return throwError(new AppError(error));
  }
}
