import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hr-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden transition-all duration-300"
      [ngClass]="isOpen ? 'pointer-events-auto' : 'pointer-events-none'"
    >
      <!-- Backdrop with blur -->
      <div
        class="absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300"
        [ngClass]="isOpen ? 'opacity-100' : 'opacity-0'"
        (click)="onBackdropClick()"
      ></div>

      <!-- Modal Card -->
      <div
        class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col justify-between max-w-full z-10 transform transition-all duration-300 ease-out"
        [ngClass]="[
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          sizeClasses[size]
        ]"
      >
        <!-- Header -->
        <div class="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 leading-none mb-0.5">{{ title }}</h3>
            <p *ngIf="subtitle" class="text-4xs text-slate-400 font-semibold uppercase tracking-wider">{{ subtitle }}</p>
          </div>
          <button
            (click)="close.emit()"
            class="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-850 transition-premium focus:outline-none"
          >
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>

        <!-- Body Content -->
        <div class="flex-1 p-6 overflow-y-auto max-h-[70vh]">
          <ng-content></ng-content>
        </div>

        <!-- Footer -->
        <div *ngIf="showFooter" class="px-6 py-4 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
          <ng-content select="[footer]"></ng-content>
          <ng-container *ngIf="!hasCustomFooter">
            <button
              (click)="close.emit()"
              class="px-4 py-2 text-xs font-semibold rounded-lg bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800 transition-premium active:scale-98"
            >
              {{ cancelText }}
            </button>
            <button
              [disabled]="confirmDisabled"
              (click)="confirm.emit()"
              class="px-4 py-2 text-xs font-semibold rounded-lg bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 transition-premium active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ confirmText }}
            </button>
          </ng-container>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .text-4xs {
      font-size: 0.55rem;
    }
    .active\\:scale-98:active {
      transform: scale(0.98);
    }
  `]
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() showFooter = true;
  @Input() hasCustomFooter = false;
  @Input() cancelText = 'Cancel';
  @Input() confirmText = 'Confirm';
  @Input() confirmDisabled = false;
  @Input() closeOnBackdropClick = true;

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  sizeClasses = {
    sm: 'w-[400px]',
    md: 'w-[550px]',
    lg: 'w-[800px]',
    xl: 'w-[1000px]'
  };

  onBackdropClick() {
    if (this.closeOnBackdropClick) {
      this.close.emit();
    }
  }
}
