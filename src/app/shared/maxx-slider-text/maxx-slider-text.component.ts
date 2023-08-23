import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maxx-slider-text',
  templateUrl: './maxx-slider-text.component.html',
  styleUrls: ['./maxx-slider-text.component.scss'],
})
export class MaxxSliderTextComponent implements OnInit {
  @Input() bgWhite? = true;
  @Input() title?: string;
  @Input() text?: string;
  @Input() text1?: string;
  @Input() slider?: any;

  constructor() {}

  ngOnInit(): void {}
}
