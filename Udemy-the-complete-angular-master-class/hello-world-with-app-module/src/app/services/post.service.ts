import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../app-errror';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get<any>(this.url);
  }

  createPosts(post: any) {
    return this.httpClient.post(this.url, JSON.stringify(post));
  }

  updatePosts(post: any) {
    return this.httpClient.patch(`${this.url}/${post.id}`, { isRead: true });
  }

  deletePosts(id: any) {
    return this.httpClient.delete(`${this.url}/${id}`)
      .pipe(catchError((error: Response) => throwError(new AppError(error))));
  }
}
