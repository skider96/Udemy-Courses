import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../app-errror';
import { BadInput } from '../bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get<any>(this.url)
    .pipe(catchError((error: Response) => throwError(new AppError(error))));;
  }

  createPosts(post: any) {
    return this.httpClient.post(this.url, JSON.stringify(post))
    .pipe(catchError((error: Response) => {
      if (error.status === 400)  return throwError(new BadInput(error));
      return throwError(new AppError(error));
    }));
  };

  updatePosts(post: any) {
    return this.httpClient.patch(`${this.url}/${post.id}`, { isRead: true })
    .pipe(catchError((error: Response) => throwError(new AppError(error))));
  }

  deletePosts(id: any) {
    return this.httpClient.delete(`${this.url}/${id}`)
      .pipe(catchError((error: Response) => throwError(new AppError(error))));
      // .pipe(catchError((error: AppError) => {
      //   if (error instanceof NotFoundError)  return throwError(new NotFoundError(error));
      //   return throwError(new AppError(error));
      // }));

  }
}
