import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ColumnConfig {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  filterOptions?: { value: any; label: string }[];
  type?: 'text' | 'number' | 'date' | 'badge' | 'custom';
  badgeClassMap?: { [value: string]: string };
}

export interface PaginationConfig {
  pageIndex: number;
  pageSize: number;
  totalItems: number;
  pageSizeOptions?: number[];
}

export interface RowAction {
  id: string;
  label: string;
  icon?: string;
  class?: string;
}

export interface TableAction {
  id: string;
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
}

@Component({
  selector: 'hr-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-glass overflow-hidden">
      
      <!-- Top Toolbar (Search, Filter, Table-level actions) -->
      <div *ngIf="showToolbar" class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        
        <!-- Left: Search and Filters -->
        <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <!-- Search box -->
          <div *ngIf="searchable" class="relative w-full sm:w-72">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <i class="fas fa-search text-sm"></i>
            </span>
            <input
              type="text"
              class="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-premium"
              [placeholder]="searchPlaceholder"
              [(ngModel)]="searchTerm"
              (input)="onSearchChange()"
            />
          </div>

          <!-- Column Filters -->
          <ng-container *ngFor="let col of columns">
            <div *ngIf="col.filterable && col.filterOptions" class="relative w-full sm:w-auto">
              <select
                class="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-premium appearance-none pr-8"
                [(ngModel)]="columnFilters[col.key]"
                (change)="onFilterChange(col.key)"
              >
                <option value="">All {{ col.label }}s</option>
                <option *ngFor="let opt of col.filterOptions" [value]="opt.value">{{ opt.label }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-slate-400">
                <i class="fas fa-chevron-down text-2xs"></i>
              </div>
            </div>
          </ng-container>
        </div>

        <!-- Right: Actions -->
        <div *ngIf="tableActions.length > 0" class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            *ngFor="let act of tableActions"
            (click)="tableActionClick.emit(act.id)"
            [ngClass]="[
              'inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg shadow-sm focus:outline-none transition-premium active:scale-98',
              act.variant === 'primary' ? 'bg-brand-600 hover:bg-brand-700 text-white focus:ring-2 focus:ring-brand-500' :
              act.variant === 'danger' ? 'bg-danger-600 hover:bg-danger-700 text-white focus:ring-2 focus:ring-danger-500' :
              act.variant === 'outline' ? 'bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-200 focus:ring-2 focus:ring-brand-500 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-800' :
              'bg-slate-100 hover:bg-slate-200 text-slate-800 focus:ring-2 focus:ring-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200'
            ]"
          >
            <i *ngIf="act.icon" [ngClass]="act.icon" class="text-xs"></i>
            {{ act.label }}
          </button>
        </div>
      </div>

      <!-- Main Table Container -->
      <div class="relative overflow-x-auto w-full">
        <!-- Loading overlay -->
        <div *ngIf="loading" class="absolute inset-0 bg-white/70 dark:bg-slate-900/70 z-10 flex flex-col items-center justify-center gap-3">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div>
          <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Loading...</p>
        </div>

        <table class="w-full text-left border-collapse min-w-max">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider select-none">
              <!-- Counter Column -->
              <th *ngIf="showCounter" class="p-4 pl-6 w-16 text-center">#</th>
              
              <!-- Configured Columns -->
              <th
                *ngFor="let col of columns"
                [ngClass]="{'cursor-pointer hover:text-brand-600 dark:hover:text-brand-400 transition-colors': col.sortable}"
                (click)="onHeaderClick(col)"
                class="p-4 font-semibold"
              >
                <div class="flex items-center gap-1.5">
                  <span>{{ col.label }}</span>
                  <!-- Sort Arrows -->
                  <span *ngIf="col.sortable" class="inline-flex flex-col text-2xs leading-none">
                    <i
                      class="fas fa-sort-up transition-colors"
                      [ngClass]="sortKey === col.key && sortDirection === 'asc' ? 'text-brand-600' : 'opacity-30'"
                    ></i>
                    <i
                      class="fas fa-sort-down transition-colors"
                      [ngClass]="sortKey === col.key && sortDirection === 'desc' ? 'text-brand-600' : 'opacity-30'"
                    ></i>
                  </span>
                </div>
              </th>

              <!-- Actions Column -->
              <th *ngIf="rowActions.length > 0" class="p-4 pr-6 w-24 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-slate-100 dark:divide-slate-800/50 text-sm text-slate-700 dark:text-slate-300">
            <!-- Empty State -->
            <tr *ngIf="data.length === 0 && !loading">
              <td [attr.colspan]="totalColumns" class="p-12 text-center">
                <div class="flex flex-col items-center justify-center gap-3">
                  <div class="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 shadow-inner">
                    <i class="fas fa-inbox text-xl"></i>
                  </div>
                  <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ emptyTitle }}</div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">{{ emptySubtitle }}</p>
                </div>
              </td>
            </tr>

            <!-- Rows -->
            <tr
              *ngFor="let row of data; let i = index"
              class="hover:bg-slate-50/50 dark:hover:bg-slate-850/40 transition-colors group"
            >
              <!-- Counter -->
              <td *ngIf="showCounter" class="p-4 pl-6 text-center text-slate-400 dark:text-slate-500 font-medium">
                {{ getRowNumber(i) }}
              </td>

              <!-- Dynamic Data Cells -->
              <td *ngFor="let col of columns" class="p-4">
                <!-- Text Cell -->
                <span *ngIf="!col.type || col.type === 'text'" class="font-medium text-slate-900 dark:text-slate-100">
                  {{ row[col.key] }}
                </span>

                <!-- Number Cell -->
                <span *ngIf="col.type === 'number'" class="font-mono text-slate-900 dark:text-slate-100 font-semibold">
                  {{ row[col.key] }}
                </span>

                <!-- Date Cell -->
                <span *ngIf="col.type === 'date'" class="text-slate-500 dark:text-slate-400 text-xs">
                  {{ row[col.key] | date:'mediumDate' }}
                </span>

                <!-- Badge/Status Cell -->
                <span
                  *ngIf="col.type === 'badge'"
                  [ngClass]="getBadgeClass(col, row[col.key])"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-2xs border"
                >
                  {{ row[col.key] }}
                </span>

                <!-- Custom Template Cell -->
                <div *ngIf="col.type === 'custom'" class="inline-flex">
                  <ng-container *ngTemplateOutlet="customTemplates[col.key] || defaultCell; context: { $implicit: row }"></ng-container>
                  <ng-template #defaultCell>{{ row[col.key] }}</ng-template>
                </div>
              </td>

              <!-- Actions Dropdown -->
              <td *ngIf="rowActions.length > 0" class="p-4 pr-6 text-center relative">
                <div class="inline-flex items-center justify-center gap-1.5">
                  <button
                    *ngFor="let act of rowActions"
                    (click)="rowActionClick.emit({ actionId: act.id, row })"
                    [title]="act.label"
                    [ngClass]="act.class || 'text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700'"
                    class="h-8 w-8 rounded-lg flex items-center justify-center transition-premium active:scale-90"
                  >
                    <i *ngIf="act.icon" [ngClass]="act.icon" class="text-sm"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Footer -->
      <div *ngIf="pagination" class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold select-none">
        <!-- Pagination Info -->
        <div>
          Showing <span class="text-slate-900 dark:text-slate-100 font-bold">{{ getShowingStart() }}</span> to
          <span class="text-slate-900 dark:text-slate-100 font-bold">{{ getShowingEnd() }}</span> of
          <span class="text-slate-900 dark:text-slate-100 font-bold">{{ paginationConfig.totalItems }}</span> records
        </div>

        <!-- Controls -->
        <div class="flex flex-wrap items-center gap-4">
          <!-- Page size selector -->
          <div class="flex items-center gap-2">
            <span>Show</span>
            <div class="relative">
              <select
                class="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-500 pr-7"
                [ngModel]="paginationConfig.pageSize"
                (ngModelChange)="onPageSizeChange($event)"
              >
                <option *ngFor="let opt of pageSizeOptions" [value]="opt">{{ opt }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 pr-1.5 flex items-center pointer-events-none text-slate-400">
                <i class="fas fa-chevron-down text-3xs"></i>
              </div>
            </div>
            <span>per page</span>
          </div>

          <!-- Page buttons -->
          <div class="flex items-center gap-1 shadow-2xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 rounded-lg p-0.5 overflow-hidden">
            <button
              [disabled]="paginationConfig.pageIndex === 0"
              (click)="onPageChange(paginationConfig.pageIndex - 1)"
              class="h-7 w-7 rounded-md flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-850 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <i class="fas fa-chevron-left text-2xs"></i>
            </button>
            
            <button
              *ngFor="let page of getVisiblePages()"
              (click)="onPageChange(page)"
              [disabled]="page === -1"
              [ngClass]="[
                'h-7 min-w-7 px-1.5 rounded-md flex items-center justify-center transition-premium text-2xs font-bold',
                paginationConfig.pageIndex === page
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-850'
              ]"
            >
              {{ page === -1 ? '...' : page + 1 }}
            </button>

            <button
              [disabled]="paginationConfig.pageIndex === totalPages - 1"
              (click)="onPageChange(paginationConfig.pageIndex + 1)"
              class="h-7 w-7 rounded-md flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-850 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <i class="fas fa-chevron-right text-2xs"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .text-2xs {
      font-size: 0.65rem;
    }
    .text-3xs {
      font-size: 0.55rem;
    }
    .active\\:scale-98:active {
      transform: scale(0.98);
    }
    .active\\:scale-90:active {
      transform: scale(0.90);
    }
  `]
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: ColumnConfig[] = [];
  @Input() loading = false;
  @Input() showCounter = true;
  @Input() searchable = true;
  @Input() searchPlaceholder = 'Search records...';
  @Input() emptyTitle = 'No Records Found';
  @Input() emptySubtitle = 'Try adjusting your search filters or add a new record to get started.';
  
  // Custom templates mapped by column key
  @Input() customTemplates: { [columnKey: string]: any } = {};

  // Actions Config
  @Input() rowActions: RowAction[] = [];
  @Input() tableActions: TableAction[] = [];

  // Pagination Config
  @Input() pagination = true;
  @Input() paginationConfig: PaginationConfig = {
    pageIndex: 0,
    pageSize: 10,
    totalItems: 0
  };
  @Input() pageSizeOptions = [5, 10, 20, 50, 100];

  // Outputs
  @Output() sortChange = new EventEmitter<{ key: string; direction: 'asc' | 'desc' | '' }>();
  @Output() pageChange = new EventEmitter<{ pageIndex: number; pageSize: number }>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<{ [columnKey: string]: string }>();
  @Output() rowActionClick = new EventEmitter<{ actionId: string; row: any }>();
  @Output() tableActionClick = new EventEmitter<string>();

  // Component Internal State
  searchTerm = '';
  columnFilters: { [key: string]: string } = {};
  sortKey = '';
  sortDirection: 'asc' | 'desc' | '' = '';

  get showToolbar(): boolean {
    return this.searchable || this.columns.some(c => c.filterable) || this.tableActions.length > 0;
  }

  get totalColumns(): number {
    let count = this.columns.length;
    if (this.showCounter) count++;
    if (this.rowActions.length > 0) count++;
    return count;
  }

  get totalPages(): number {
    const size = this.paginationConfig.pageSize || 10;
    return Math.ceil(this.paginationConfig.totalItems / size) || 1;
  }

  getRowNumber(index: number): number {
    return (this.paginationConfig.pageIndex * this.paginationConfig.pageSize) + index + 1;
  }

  getShowingStart(): number {
    if (this.paginationConfig.totalItems === 0) return 0;
    return (this.paginationConfig.pageIndex * this.paginationConfig.pageSize) + 1;
  }

  getShowingEnd(): number {
    const end = (this.paginationConfig.pageIndex + 1) * this.paginationConfig.pageSize;
    return Math.min(end, this.paginationConfig.totalItems);
  }

  onSearchChange() {
    this.searchChange.emit(this.searchTerm);
  }

  onFilterChange(columnKey: string) {
    this.filterChange.emit(this.columnFilters);
  }

  onHeaderClick(col: ColumnConfig) {
    if (!col.sortable) return;
    
    if (this.sortKey !== col.key) {
      this.sortKey = col.key;
      this.sortDirection = 'asc';
    } else {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else if (this.sortDirection === 'desc') {
        this.sortDirection = '';
        this.sortKey = '';
      } else {
        this.sortDirection = 'asc';
      }
    }

    this.sortChange.emit({
      key: this.sortKey,
      direction: this.sortDirection
    });
  }

  onPageChange(pageIndex: number) {
    if (pageIndex < 0 || pageIndex >= this.totalPages) return;
    this.paginationConfig.pageIndex = pageIndex;
    this.pageChange.emit({
      pageIndex: this.paginationConfig.pageIndex,
      pageSize: this.paginationConfig.pageSize
    });
  }

  onPageSizeChange(pageSize: number) {
    this.paginationConfig.pageSize = pageSize;
    this.paginationConfig.pageIndex = 0; // reset to first page
    this.pageChange.emit({
      pageIndex: 0,
      pageSize: this.paginationConfig.pageSize
    });
  }

  getBadgeClass(col: ColumnConfig, val: any): string {
    const map = col.badgeClassMap;
    if (map && map[val]) {
      return map[val];
    }
    // Generic fallback badges
    const str = String(val).toLowerCase();
    if (str === 'active' || str === 'true' || str === 'paid' || str === 'completed') {
      return 'bg-success-50 text-success-700 border-success-100 dark:bg-success-950/40 dark:text-success-400 dark:border-success-900/50';
    }
    if (str === 'inactive' || str === 'false' || str === 'failed' || str === 'deactivated') {
      return 'bg-danger-50 text-danger-700 border-danger-100 dark:bg-danger-950/40 dark:text-danger-400 dark:border-danger-900/50';
    }
    if (str === 'pending' || str === 'draft') {
      return 'bg-warning-50 text-warning-700 border-warning-100 dark:bg-warning-950/40 dark:text-warning-400 dark:border-warning-900/50';
    }
    return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
  }

  getVisiblePages(): number[] {
    const total = this.totalPages;
    const current = this.paginationConfig.pageIndex;
    const pages: number[] = [];

    if (total <= 5) {
      for (let i = 0; i < total; i++) pages.push(i);
    } else {
      if (current <= 2) {
        pages.push(0, 1, 2, 3, -1, total - 1);
      } else if (current >= total - 3) {
        pages.push(0, -1, total - 4, total - 3, total - 2, total - 1);
      } else {
        pages.push(0, -1, current - 1, current, current + 1, -1, total - 1);
      }
    }
    return pages;
  }
}
