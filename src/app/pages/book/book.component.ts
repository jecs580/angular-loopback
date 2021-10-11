import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userService:UserService) { }
  posts:any;
  ngOnInit(): void {
    // this.dataView();´
    this.dataPosts();
  }
  dataView(){
    this.route.params.subscribe(val => console.log(val['content']))
  }
  dataPosts(){
    this.userService.get().subscribe((data)=>{
      console.log(data);
      this.posts = data;
    })
  }
}
