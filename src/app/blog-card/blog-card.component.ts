import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  defaultImage = "https://cdn.pixabay.com/photo/2022/06/03/20/15/sunset-7240788_960_720.jpg"

  @Input() blogItem :Blog={
    "id": 0,
    "title": "",
    "link": "",
    "keywords":[""],
    "creator": [""],
    "description": "",
    "full_description":"",
    "pubDate": "",
    "image_url":"",
    "country":[""],
    "category": [""],
    "language": ""

  }
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  goToDetails(){
    this.router.navigate(["/blog/blog-details",this.blogItem.id])
  }
  


}
