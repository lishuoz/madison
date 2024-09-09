import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { BlogService } from 'src/app/blogs/blog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links = this.appService.links;

  isThankYouPage: boolean = false;

  recentPosts = this.blogService.blogs.slice(0, 3);

  constructor(
    private appService: AppService,
    private router: Router,
    private blogService: BlogService,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isThankYouPage = this.router.url === '/thank-you';
      }
    });
  }
}
