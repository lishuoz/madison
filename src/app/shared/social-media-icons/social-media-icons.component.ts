import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-icons',
  templateUrl: './social-media-icons.component.html',
  styleUrls: ['./social-media-icons.component.scss'],
})
export class SocialMediaIconsComponent implements OnInit {
  @Input() faLg? = false;
  @Input() fa2x? = false;
  @Input() isPrimary? = false;

  constructor() {}

  ngOnInit(): void {}
}
