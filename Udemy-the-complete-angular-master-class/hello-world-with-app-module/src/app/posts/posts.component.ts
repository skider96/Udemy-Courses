// posts.component.ts
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AppError } from '../app-errror';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        if (error instanceof AppError) {
          // Handle specific app errors
        } else {
          // Handle other errors
        }
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.posts.splice(0, 0, post);
    this.service.create(post).subscribe(
      (response: any) => {
        post.id = response.id;
       
      },
      (error) => {
        console.error(error);
        if (error instanceof AppError) {
          this.posts.splice(0,1 )
          // Handle specific app errors
        } else {
          // Handle other errors
        }
      }
    );
  }

  updatePost(post: any) {
    this.service.update(post).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
        if (error instanceof AppError) {
          // Handle specific app errors
        } else {
          // Handle other errors
        }
      }
    );
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id).subscribe(
     null,
      (error: HttpErrorResponse) => {
        console.error(error);
        this.posts.splice(index,0,post)
        if (error instanceof AppError) {
          // Handle specific app errors
        } else {
          // Handle other errors
        }
      }
    );
  }
}
