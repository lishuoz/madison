import { AfterViewInit, Component, OnInit } from '@angular/core';
declare function gtag(...args: any[]): void;
declare function gtag_report_conversion(url?: string): void;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const widgetSelector =
      '.elfsight-app-4ea3280c-9f52-436d-8e78-7ab534782e48delete';

    // Find the widget container
    const targetNode = document.querySelector(widgetSelector);
    if (targetNode) {
      const observer = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            // Check if the button is added
            const button = document.querySelector(
              '.ButtonBase__ButtonContainer-sc-p43e7i-3',
            );
            console.log('button', button);
            if (button) {
              this.addTrackingToButton(button);
              observer.disconnect(); // Stop observing once the button is found
              break;
            }
          }
        }
      });

      // Start observing the widget container for changes
      observer.observe(targetNode, { childList: true, subtree: true });
    }
  }

  addTrackingToButton(button: Element) {
    button.addEventListener('click', () => {
      this.trackButtonClick();
    });
  }

  trackButtonClick() {
    // gtag('event', 'conversion', {
    //   event_category: 'Contact Form',
    //   event_label: 'Submit Button',
    //   value: 1,
    // });

    console.log('Submit button clicked and tracked');

    console.log(
      'gtag_report_conversion',
      gtag_report_conversion(),
      // gtag_report_conversion(
      //   'https://www.madisonavenuewindowfashions.com/thank-you',
      // ),
    );

    // setTimeout(() => {
    //   gtag_report_conversion(
    //     'https://www.madisonavenuewindowfashions.com/thank-you',
    //   );
    // }, 1500);
  }
}
