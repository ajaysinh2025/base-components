import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hr-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [ngClass]="[
        'inline-flex items-center justify-center font-medium rounded-lg transition-premium focus:outline-none focus:ring-2 focus:ring-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        disabled || loading ? 'opacity-60 cursor-not-allowed' : 'active:scale-98 shadow-sm hover:shadow-md'
      ]"
    >
      <!-- Loading Spinner -->
      <svg
        *ngIf="loading"
        class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>

      <!-- Prefix Icon -->
      <span *ngIf="icon && iconPosition === 'left' && !loading" class="mr-2 inline-flex items-center justify-center">
        <i [ngClass]="icon"></i>
      </span>

      <!-- Button Text -->
      <span class="inline-flex items-center"><ng-content></ng-content></span>

      <!-- Suffix Icon -->
      <span *ngIf="icon && iconPosition === 'right' && !loading" class="ml-2 inline-flex items-center justify-center">
        <i [ngClass]="icon"></i>
      </span>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    .active\\:scale-98:active {
      transform: scale(0.98);
    }
  `]
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() icon = ''; // e.g. 'fas fa-plus'
  @Input() iconPosition: 'left' | 'right' = 'left';

  variantClasses = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-500 border border-transparent',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 focus:ring-slate-400 border border-transparent dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200',
    danger: 'bg-danger-600 hover:bg-danger-700 text-white focus:ring-danger-500 border border-transparent',
    outline: 'bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-300 focus:ring-brand-500 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-800'
  };

  sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-semibold',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
}
