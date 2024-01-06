import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../app-errror';
import { BadInput } from '../bad-input';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService {
  protected abstract apiUrl: string;

  constructor(protected httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<any>(this.apiUrl)
      .pipe(
        map((response: any) => response.json),
        catchError((error: HttpErrorResponse) => throwError(new AppError(error)))
      );
  }

  create(resource: any) {
    return this.httpClient.post(this.apiUrl, JSON.stringify(resource))
      .pipe(catchError((error: HttpErrorResponse) => {
        if (error.status === 400) return throwError(new BadInput(error));
        return throwError(new AppError(error));
      }));
  }

  update(resource: any) {
    return this.httpClient.patch(`${this.apiUrl}/${resource.id}`, { isRead: true })
      .pipe(catchError(this.handleError)); 
  }

  delete(id: any) {
    
    
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(new AppError(error));
  }
}
