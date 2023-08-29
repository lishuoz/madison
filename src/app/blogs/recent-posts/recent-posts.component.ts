import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss'],
})
export class RecentPostsComponent implements OnInit {
  recentPosts = this.blogService.blogs.slice(0, 3);

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}
}
