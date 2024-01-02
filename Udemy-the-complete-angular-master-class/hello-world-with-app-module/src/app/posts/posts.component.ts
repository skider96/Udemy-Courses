import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPosts(post).subscribe(
      (response: any) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      },
      (error) => alert('Cannot create post')
    );
  }
  updatePost(post: any) {
    this.service.updatePosts(post).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => alert('Error updating')
    );
  }

  deletePost(post: any) {
    this.service.deletePosts(post.id)
    .subscribe(
      (response: any) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('Error deleting post');}
       else { 
        alert('common error');
      }
  });
  }
  ngOnInit() {
    this.service.getPosts().subscribe(
      (response) => {
        console.log(response);
        this.posts = response;
      },
      (error) => {
        alert('Unexpected error');
      }
    );
  }
}
