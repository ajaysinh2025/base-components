import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hr-side-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 z-50 overflow-hidden transition-all duration-300"
      [ngClass]="isOpen ? 'pointer-events-auto' : 'pointer-events-none'"
    >
      <!-- Backdrop with blur -->
      <div
        class="absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300"
        [ngClass]="isOpen ? 'opacity-100' : 'opacity-0'"
        (click)="onBackdropClick()"
      ></div>

      <!-- Drawer sliding container -->
      <div class="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div
          class="w-screen max-w-md bg-white dark:bg-slate-900 border-l border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out"
          [ngClass]="isOpen ? 'translate-x-0' : 'translate-x-full'"
        >
          
          <!-- Header Area -->
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

          <!-- Content Slot (Scrollable) -->
          <div class="flex-1 overflow-y-auto p-6">
            <ng-content></ng-content>
          </div>

          <!-- Optional Footer Slot -->
          <div *ngIf="showFooter" class="px-6 py-4 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
            <ng-content select="[footer]"></ng-content>
          </div>

        </div>
      </div>

    </div>
  `,
  styles: [`
    .text-4xs {
      font-size: 0.55rem;
    }
  `]
})
export class SidePanelComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() showFooter = false;
  @Input() closeOnBackdropClick = true;

  @Output() close = new EventEmitter<void>();

  onBackdropClick() {
    if (this.closeOnBackdropClick) {
      this.close.emit();
    }
  }
}
