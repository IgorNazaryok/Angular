import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Post, PostCreateError } from './interface'
import { Observable, throwError } from 'rxjs'
import { tap, catchError  } from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class PostService {

   public errorCreatePost:PostCreateError = {
    Author: [],
    Title: [],
    Text:  []
   }
   
    
    constructor(private httpClient: HttpClient){}   
     

    GetPosts():Observable<Post>
    {       
        return this.httpClient.get(`https://localhost:5001/posts`)
        .pipe(
           tap(this.getPosts)          
        )
    }
    CreatePost(post:Post):Observable<any>
    {    
 
        return this.httpClient.post(`https://localhost:5001/posts`,post)
        .pipe(            
          catchError(this.CreatePostError.bind(this)) 
        )
    }


    private CreatePostError (err: HttpErrorResponse) {
        this.errorCreatePost= err.error.errors
         return throwError(err)        
    }

    private getPosts(res:Post){
        return res
    }
}