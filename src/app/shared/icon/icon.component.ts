import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconClass?: string = 'fa-solid fa-certificate fa-2xl';
  @Input() title?: string;
  @Input() text?: string;

  isActive: boolean = false;

  onMouseEnter() {
    this.isActive = true;
  }

  onMouseLeave() {
    this.isActive = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
