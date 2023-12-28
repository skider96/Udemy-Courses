import { Component } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>(this.url)
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      })
  }

  createPost(input: HTMLInputElement) {
let post: any = { title: input.value} ;
this.httpClient.post(this.url, JSON.stringify(post))
.subscribe((response: any) => {
  post.id = response.id;
  this.posts.splice(0,0, post)
  console.log(response);
});
input.value = '';
}
}
