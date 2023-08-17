import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-map-container',
  templateUrl: './contact-map-container.component.html',
  styleUrls: ['./contact-map-container.component.scss'],
})
export class ContactMapContainerComponent implements OnInit {
  @Input() showTitle? = true;
  @Input() showPromo? = false;
  constructor() {}

  ngOnInit(): void {}
}
