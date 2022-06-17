import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogList from "../../assets/blogs.json";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

    defaultImage = "https://cdn.pixabay.com/photo/2022/06/03/20/15/sunset-7240788_960_720.jpg";

  blogDetails:any;
  constructor(private activatedRoute:ActivatedRoute) {
    console.log(this.activatedRoute)
    const activeID =this.activatedRoute.snapshot.params['id'];
    this.blogDetails =blogList.find(blog=>blog.id ==activeID)
   }
  ngOnInit(): void {
  }

}
