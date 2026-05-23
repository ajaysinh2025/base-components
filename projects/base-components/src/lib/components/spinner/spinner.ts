import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hr-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [ngClass]="[
        fullPage ? 'fixed inset-0 z-[2000] bg-slate-950/40 backdrop-blur-xs flex flex-col items-center justify-center gap-3 animate-fade-in' :
        overlay ? 'absolute inset-0 z-10 bg-white/70 dark:bg-slate-900/70 flex flex-col items-center justify-center gap-3 animate-fade-in' :
        'flex flex-col items-center justify-center gap-2.5 inline-flex'
      ]"
    >
      <div class="relative flex items-center justify-center">
        <!-- Spinner Ring -->
        <svg
          [ngClass]="[
            sizeClasses[size],
            colorClasses[color],
            'animate-spin'
          ]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="3"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>

      <!-- Spinner Text Label -->
      <p
        *ngIf="text"
        [ngClass]="[
          size === 'sm' ? 'text-2xs' : 'text-xs',
          color === 'white' ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'
        ]"
        class="font-semibold uppercase tracking-widest text-center select-none"
      >
        {{ text }}
      </p>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    .animate-fade-in {
      animation: fadeIn 0.15s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .text-2xs {
      font-size: 0.65rem;
    }
  `]
})
export class SpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'brand' | 'white' | 'muted' = 'brand';
  @Input() text = '';
  @Input() fullPage = false;
  @Input() overlay = false;

  colorClasses = {
    brand: 'text-brand-600 dark:text-brand-400',
    white: 'text-white',
    muted: 'text-slate-400 dark:text-slate-500'
  };

  sizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };
}
