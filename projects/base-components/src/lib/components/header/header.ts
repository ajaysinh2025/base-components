import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl?: string;
  role?: string;
}

@Component({
  selector: 'hr-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="h-16 w-full glass dark:bg-slate-900/80 border-b border-slate-100 dark:border-slate-800/80 px-6 flex items-center justify-between sticky top-0 z-40">
      
      <!-- Left Section: Logo & Page Context -->
      <div class="flex items-center gap-4">
        <!-- Optional Logo Slot -->
        <div class="flex items-center gap-2">
          <ng-content select="[logo]"></ng-content>
          <div *ngIf="showDefaultLogo" class="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 font-black text-sm">
            H
          </div>
        </div>

        <div class="h-4 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

        <!-- Page Title Context -->
        <div>
          <h2 class="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-none mb-0.5">{{ pageTitle }}</h2>
          <p *ngIf="pageSubtitle" class="text-3xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">{{ pageSubtitle }}</p>
        </div>
      </div>

      <!-- Right Section: Actions, Notifications & Profile -->
      <div class="flex items-center gap-4">
        
        <!-- Notifications button -->
        <button
          *ngIf="showNotifications"
          (click)="notificationClick.emit()"
          class="relative h-9 w-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-premium focus:outline-none"
        >
          <i class="fas fa-bell text-base"></i>
          <!-- Pulse alert dot -->
          <span *ngIf="hasUnreadNotifications" class="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-danger-500 ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
        </button>

        <div class="h-4 w-px bg-slate-200 dark:bg-slate-700"></div>

        <!-- User Profile Dropdown -->
        <div *ngIf="user" class="relative">
          <button
            (click)="toggleProfileMenu()"
            class="flex items-center gap-2.5 p-1 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-premium focus:outline-none text-left"
          >
            <!-- Avatar -->
            <div class="relative">
              <img
                *ngIf="user.avatarUrl; else avatarInitials"
                [src]="user.avatarUrl"
                class="h-8 w-8 rounded-lg object-cover ring-2 ring-slate-100 dark:ring-slate-800"
                alt="Avatar"
              />
              <ng-template #avatarInitials>
                <div class="h-8 w-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400 font-bold text-xs flex items-center justify-center ring-2 ring-slate-100 dark:ring-slate-800">
                  {{ getInitials(user.name) }}
                </div>
              </ng-template>
              <span class="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-success-500 ring-2 ring-white dark:ring-slate-900"></span>
            </div>

            <!-- Profile Info (Hidden on mobile) -->
            <div class="hidden md:flex flex-col pr-1">
              <span class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">{{ user.name }}</span>
              <span class="text-4xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">{{ user.role || 'User' }}</span>
            </div>
            
            <i class="fas fa-chevron-down text-3xs text-slate-400 dark:text-slate-500 pr-1 hidden md:block"></i>
          </button>

          <!-- Dropdown Menu -->
          <div
            *ngIf="isProfileMenuOpen"
            class="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-950 rounded-2xl shadow-premium border border-slate-100 dark:border-slate-800/80 p-1.5 z-50 animate-slideDown"
          >
            <!-- User Summary -->
            <div class="px-3 py-2.5 border-b border-slate-100 dark:border-slate-900 mb-1">
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">{{ user.name }}</p>
              <p class="text-3xs text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">{{ user.email }}</p>
            </div>

            <!-- Menu links -->
            <button
              (click)="onMenuOptionClick('profile')"
              class="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-2.5 transition-colors"
            >
              <i class="fas fa-user-circle text-slate-400"></i> Profile Details
            </button>
            <button
              (click)="onMenuOptionClick('settings')"
              class="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-2.5 transition-colors"
            >
              <i class="fas fa-cog text-slate-400"></i> Settings
            </button>
            
            <div class="h-px bg-slate-100 dark:bg-slate-900 my-1"></div>

            <button
              (click)="onMenuOptionClick('logout')"
              class="w-full text-left px-3 py-2 text-xs font-bold text-danger-500 hover:bg-danger-50 dark:hover:bg-danger-950/20 rounded-lg flex items-center gap-2.5 transition-colors"
            >
              <i class="fas fa-sign-out-alt"></i> Sign Out
            </button>
          </div>
        </div>

      </div>
    </header>
  `,
  styles: [`
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slideDown {
      animation: slideDown 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .text-3xs {
      font-size: 0.65rem;
    }
    .text-4xs {
      font-size: 0.55rem;
    }
  `]
})
export class HeaderComponent {
  @Input() pageTitle = '';
  @Input() pageSubtitle = '';
  @Input() showDefaultLogo = true;
  @Input() showNotifications = true;
  @Input() hasUnreadNotifications = false;
  @Input() user: UserProfile | null = null;

  @Output() notificationClick = new EventEmitter<void>();
  @Output() menuOptionClick = new EventEmitter<string>();

  isProfileMenuOpen = false;

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  getInitials(name: string): string {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }

  onMenuOptionClick(option: string) {
    this.isProfileMenuOpen = false;
    this.menuOptionClick.emit(option);
  }
}
