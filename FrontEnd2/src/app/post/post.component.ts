import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  data:any = []
  p: number = 1;

  key = 'id';
  reverse:boolean=false;
  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.getData().subscribe(res=>{
      this.data=res;
      console.log(this.data)
    })
  }

  sort(key:string){
    this.key = key;
    this.reverse=!this.reverse;
  }

}
