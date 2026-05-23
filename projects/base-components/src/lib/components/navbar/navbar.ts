import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface NavItem {
  label: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'hr-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="w-64 h-full bg-slate-900 text-slate-400 border-r border-slate-800 flex flex-col justify-between select-none">
      
      <!-- Top Section -->
      <div class="flex flex-col flex-1">
        <!-- Brand/Header Area -->
        <div class="h-16 px-6 border-b border-slate-800 flex items-center gap-3">
          <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-base">
            M
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-bold text-white tracking-tight leading-none mb-0.5">{{ brandName }}</span>
            <span class="text-4xs text-slate-500 font-semibold uppercase tracking-wider">{{ brandSubtitle }}</span>
          </div>
        </div>

        <!-- Scrollable Navigation Items -->
        <div class="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
          <a
            *ngFor="let item of navItems"
            [routerLink]="item.route"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.route === '/' || item.route === '/dashboard' }"
            class="flex items-center gap-3.5 px-4 py-3 text-xs font-semibold rounded-xl transition-all duration-200 group focus:outline-none select-none cursor-pointer"
          >
            <!-- Hover Slide Accent -->
            <i
              *ngIf="item.icon"
              [ngClass]="item.icon"
              class="text-sm transition-transform duration-200 group-hover:scale-110"
            ></i>
            
            <span>{{ item.label }}</span>
          </a>
        </div>
      </div>

      <!-- Bottom Slot / Footer -->
      <div class="p-4 border-t border-slate-800/80 bg-slate-950/20">
        <ng-content select="[footer]"></ng-content>
        <p *ngIf="showFooterVersion" class="text-4xs text-slate-600 font-bold uppercase tracking-widest text-center mt-1">
          v{{ version }}
        </p>
      </div>

    </nav>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    .text-4xs {
      font-size: 0.55rem;
    }
    
    /* Navigation link default states */
    a {
      color: #94a3b8;
    }
    a:hover {
      color: #f8fafc;
      background: rgba(255, 255, 255, 0.03);
    }
    
    /* Navigation link active states */
    a.active {
      color: #ffffff !important;
      background: #4f46e5 !important;
      box-shadow: 0 4px 12px 0 rgba(79, 70, 229, 0.15);
    }
    
    a.active i {
      color: #ffffff;
    }
  `]
})
export class NavbarComponent {
  @Input() brandName = 'Market Yard';
  @Input() brandSubtitle = 'Management Portal';
  @Input() navItems: NavItem[] = [];
  @Input() showFooterVersion = true;
  @Input() version = '1.0.0';
}
