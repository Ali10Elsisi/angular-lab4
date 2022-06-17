import { Component, OnInit } from '@angular/core';
import blogList from "../../assets/blogs.json"


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs= blogList
  constructor() { }

  ngOnInit(): void {
  }

}
