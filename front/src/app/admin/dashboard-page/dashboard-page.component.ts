import { Component, OnDestroy, OnInit } from '@angular/core';
import {PostService} from '../../shared/post.service'
import { Post} from '../../shared/interface'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts:Post[]
  pSub:Subscription
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.GetPosts().subscribe(res=>{
      this.posts=res
          console.log(this.posts);
          
    })
  }

  ngOnDestroy(): void{
    if (this.pSub){
      this.pSub.unsubscribe()
    }
  }
}
