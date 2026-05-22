import { Component, OnInit } from '@angular/core';
import { PhoneGuardService } from './shared/phone-guard/phone-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'madison';

  constructor(private readonly phoneGuard: PhoneGuardService) {}

  ngOnInit(): void {
    this.phoneGuard.init();
  }
}
