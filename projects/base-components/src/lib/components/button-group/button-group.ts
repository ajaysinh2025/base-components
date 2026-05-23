import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hr-button-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="inline-flex rounded-lg shadow-sm -space-x-px overflow-hidden">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    ::ng-content hr-button:first-child button {
      border-top-right-radius: 0px !important;
      border-bottom-right-radius: 0px !important;
    }
    ::ng-content hr-button:last-child button {
      border-top-left-radius: 0px !important;
      border-bottom-left-radius: 0px !important;
    }
    ::ng-content hr-button:not(:first-child):not(:last-child) button {
      border-radius: 0px !important;
    }
  `]
})
export class ButtonGroupComponent {}
