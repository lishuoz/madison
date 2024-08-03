import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-logobar',
  templateUrl: './logobar.component.html',
  styleUrls: ['./logobar.component.scss'],
})
export class LogobarComponent implements OnInit {
  isThankYouPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isThankYouPage = this.router.url === '/thank-you';
      }
    });
  }
}
