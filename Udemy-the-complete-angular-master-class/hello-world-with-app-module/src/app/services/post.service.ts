import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private HttpClient: HttpClient) {


   }

   getPosts(){
    return this.HttpClient.get<any>(this.url)
   }

   createPosts(post: any){
  return  this.HttpClient.post(this.url, JSON.stringify(post)) 
  }

  updatePosts(post: any) {
   return this.HttpClient.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
  }

  deletePosts(id: any) {
   return this.HttpClient.delete(this.url + '/' + id)
  }
}
