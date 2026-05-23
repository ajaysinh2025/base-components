import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TabItem {
  id: string;
  label: string;
  icon?: string;
  badge?: string | number;
}

@Component({
  selector: 'hr-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full flex flex-col">
      <!-- Tabs Header Bar -->
      <div class="border-b border-slate-100 dark:border-slate-800/80 mb-5">
        <nav class="flex flex-wrap -mb-px gap-6" aria-label="Tabs">
          <button
            *ngFor="let tab of tabs"
            (click)="selectTab(tab.id)"
            [ngClass]="[
              'relative py-3.5 px-1.5 text-xs font-bold transition-all duration-200 focus:outline-none flex items-center gap-2 select-none active:scale-98',
              activeTabId === tab.id
                ? 'text-brand-600 dark:text-brand-400 border-b-2 border-brand-600 dark:border-brand-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 border-b-2 border-transparent'
            ]"
          >
            <!-- Tab Icon -->
            <i *ngIf="tab.icon" [ngClass]="tab.icon" class="text-sm"></i>
            
            <!-- Label -->
            <span>{{ tab.label }}</span>

            <!-- Optional Badge -->
            <span
              *ngIf="tab.badge !== undefined && tab.badge !== null"
              [ngClass]="[
                'ml-1 px-2 py-0.5 rounded-full text-4xs font-bold uppercase tracking-wider shadow-2xs',
                activeTabId === tab.id
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-400'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
              ]"
            >
              {{ tab.badge }}
            </span>
          </button>
        </nav>
      </div>

      <!-- Tabs Content Wrapper -->
      <div class="w-full flex-1">
        <!-- Render projected content panels. The consuming screen can wrap child panel content under elements matching [tabId] or use standard conditional structure. -->
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .text-4xs {
      font-size: 0.55rem;
    }
    .active\\:scale-98:active {
      transform: scale(0.98);
    }
  `]
})
export class TabsComponent {
  @Input() tabs: TabItem[] = [];
  @Input() activeTabId = '';

  @Output() tabChange = new EventEmitter<string>();

  selectTab(tabId: string) {
    if (this.activeTabId !== tabId) {
      this.activeTabId = tabId;
      this.tabChange.emit(tabId);
    }
  }
}
