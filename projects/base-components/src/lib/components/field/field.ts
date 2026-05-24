import { Component, Input, OnInit, Self, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlValueAccessor, NgControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'hr-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="w-full" [ngClass]="{'flex items-start': type === 'checkbox', 'flex-col': type !== 'checkbox'}">
      
      <!-- CHECKBOX VIEW -->
      <ng-container *ngIf="type === 'checkbox'; else standardInput">
        <div class="flex items-center h-5">
          <input
            [id]="id"
            type="checkbox"
            [disabled]="disabled"
            [(ngModel)]="value"
            (change)="onValueChange($any($event.target).checked)"
            (blur)="onBlur()"
            class="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 transition-premium cursor-pointer disabled:cursor-not-allowed"
          />
        </div>
        <div class="ml-3 text-sm">
          <label [for]="id" class="font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
            {{ label }}
            <span *ngIf="required" class="text-danger-500 font-semibold">*</span>
          </label>
          <p *ngIf="hint" class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ hint }}</p>
          <div *ngIf="isInvalid" class="text-xs text-danger-500 mt-1 flex items-center gap-1 animate-fadeIn">
            <i class="fas fa-exclamation-circle"></i>
            <span>{{ errorMessage }}</span>
          </div>
        </div>
      </ng-container>

      <!-- STANDARD INPUTS (Text, Email, Number, Date, Select, Textarea) -->
      <ng-template #standardInput>
        <!-- Stacked Label -->
        <label
          *ngIf="label && labelStyle === 'stacked'"
          [for]="id"
          class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5"
        >
          {{ label }}
          <span *ngIf="required" class="text-danger-500 font-semibold">*</span>
        </label>

        <!-- Control Container -->
        <div class="relative w-full rounded-lg shadow-sm transition-premium" [ngClass]="{'mt-1': label && labelStyle === 'stacked'}">
          <!-- Prefix Icon -->
          <div
            *ngIf="prefixIcon"
            class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500"
          >
            <i [ngClass]="prefixIcon" class="text-sm"></i>
          </div>

          <!-- INPUT ELEMENT -->
          <input
            *ngIf="type !== 'select' && type !== 'textarea'"
            [id]="id"
            [type]="type"
            [placeholder]="placeholder"
            [disabled]="disabled"
            [(ngModel)]="value"
            (input)="onValueChange($any($event.target).value)"
            (blur)="onBlur()"
            [ngClass]="[
              'block w-full rounded-lg text-slate-900 placeholder:text-slate-400 transition-premium focus:outline-none focus:ring-2 bg-white dark:bg-slate-950 dark:text-slate-100 border text-sm',
              prefixIcon ? 'pl-10' : 'pl-3.5',
              suffixIcon || isInvalid ? 'pr-10' : 'pr-3.5',
              labelStyle === 'floating' ? 'pt-6 pb-2' : 'py-2.5',
              isInvalid
                ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500'
                : 'border-slate-300 dark:border-slate-700 focus:ring-brand-500 focus:border-brand-500'
            ]"
          />

          <!-- SELECT ELEMENT -->
          <select
            *ngIf="type === 'select'"
            [id]="id"
            [disabled]="disabled"
            [(ngModel)]="value"
            (change)="onValueChange($any($event.target).value)"
            (blur)="onBlur()"
            [ngClass]="[
              'block w-full rounded-lg text-slate-900 placeholder:text-slate-400 transition-premium focus:outline-none focus:ring-2 bg-white dark:bg-slate-950 dark:text-slate-100 border text-sm appearance-none',
              prefixIcon ? 'pl-10' : 'pl-3.5',
              'pr-10',
              labelStyle === 'floating' ? 'pt-6 pb-2' : 'py-2.5',
              isInvalid
                ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500'
                : 'border-slate-300 dark:border-slate-700 focus:ring-brand-500 focus:border-brand-500'
            ]"
          >
            <option value="" disabled selected>{{ placeholder || 'Select an option' }}</option>
            <option *ngFor="let opt of options" [value]="opt.value">{{ opt.label }}</option>
          </select>
          <div
            *ngIf="type === 'select'"
            class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500"
          >
            <i class="fas fa-chevron-down text-xs"></i>
          </div>

          <!-- TEXTAREA ELEMENT -->
          <textarea
            *ngIf="type === 'textarea'"
            [id]="id"
            [rows]="rows"
            [placeholder]="placeholder"
            [disabled]="disabled"
            [(ngModel)]="value"
            (input)="onValueChange($any($event.target).value)"
            (blur)="onBlur()"
            [ngClass]="[
              'block w-full rounded-lg text-slate-900 placeholder:text-slate-400 transition-premium focus:outline-none focus:ring-2 bg-white dark:bg-slate-950 dark:text-slate-100 border text-sm',
              prefixIcon ? 'pl-10' : 'pl-3.5',
              suffixIcon || isInvalid ? 'pr-10' : 'pr-3.5',
              labelStyle === 'floating' ? 'pt-6 pb-2' : 'py-2.5',
              isInvalid
                ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500'
                : 'border-slate-300 dark:border-slate-700 focus:ring-brand-500 focus:border-brand-500'
            ]"
          ></textarea>

          <!-- Floating Label -->
          <label
            *ngIf="label && labelStyle === 'floating'"
            [for]="id"
            [ngClass]="[
              'absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400 dark:text-slate-500 transition-all duration-200 pointer-events-none origin-left',
              (value !== '' && value !== null && value !== undefined) || type === 'date'
                ? 'scale-75 -translate-y-[15px] text-brand-600 dark:text-brand-400'
                : '',
              prefixIcon ? 'left-10' : 'left-3.5'
            ]"
          >
            {{ label }}
            <span *ngIf="required" class="text-danger-500 font-semibold">*</span>
          </label>

          <!-- Suffix Icon / Error Indicator -->
          <div
            *ngIf="suffixIcon || isInvalid"
            class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none"
            [ngClass]="isInvalid ? 'text-danger-500' : 'text-slate-400 dark:text-slate-500'"
          >
            <i [ngClass]="isInvalid ? 'fas fa-exclamation-circle' : suffixIcon" class="text-sm"></i>
          </div>
        </div>

        <!-- Validation Error Message / Hint -->
        <div class="flex items-center justify-between mt-1 px-1">
          <div *ngIf="isInvalid; else hintView" class="text-xs text-danger-500 flex items-center gap-1 animate-fadeIn">
            <span>{{ errorMessage }}</span>
          </div>
          <ng-template #hintView>
            <p *ngIf="hint" class="text-xs text-slate-400 dark:text-slate-500">{{ hint }}</p>
          </ng-template>
        </div>
      </ng-template>

    </div>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-3px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.2s ease-out forwards;
    }
    /* Fallback paddings to prevent overlap if Tailwind classes are purged in host app */
    .pl-10 {
      padding-left: 2.5rem !important;
    }
    .pl-3\\.5 {
      padding-left: 0.875rem !important;
    }
    .pr-10 {
      padding-right: 2.5rem !important;
    }
    .pr-3\\.5 {
      padding-right: 0.875rem !important;
    }
    .pt-6 {
      padding-top: 1.5rem !important;
    }
    .pb-2 {
      padding-bottom: 0.5rem !important;
    }
    .py-2\\.5 {
      padding-top: 0.625rem !important;
      padding-bottom: 0.625rem !important;
    }
  `]
})
export class FieldComponent implements ControlValueAccessor, OnInit {
  @Input() id = 'field-' + Math.random().toString(36).substring(2, 9);
  @Input() label = '';
  @Input() labelStyle: 'floating' | 'stacked' = 'stacked';
  @Input() type: 'text' | 'email' | 'number' | 'date' | 'select' | 'textarea' | 'checkbox' | 'password' = 'text';
  @Input() placeholder = '';
  @Input() hint = '';
  @Input() prefixIcon = '';
  @Input() suffixIcon = '';
  @Input() required = false;
  @Input() options: { value: any; label: string }[] = [];
  @Input() rows = 3;
  @Input() customError = '';

  private _value: any = '';
  disabled = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    // If the standard Validators.required is set, let's reflect it visually
    if (this.ngControl?.control?.validator) {
      const validator = this.ngControl.control.validator({} as any);
      if (validator && validator['required']) {
        this.required = true;
      }
    }
  }

  get value() {
    return this._value;
  }

  set value(val: any) {
    this._value = val;
  }

  writeValue(val: any): void {
    if (val === undefined) {
      this._value = '';
    } else {
      this._value = val;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onValueChange(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }

  get isInvalid(): boolean {
    if (this.customError) return true;
    if (!this.ngControl) return false;
    const { touched, invalid } = this.ngControl;
    return !!(touched && invalid);
  }

  get errorMessage(): string {
    if (this.customError) return this.customError;
    if (!this.ngControl || !this.ngControl.errors) return '';

    const errors = this.ngControl.errors;
    if (errors['required']) {
      return `${this.label || 'Field'} is required.`;
    }
    if (errors['email']) {
      return 'Please enter a valid email address.';
    }
    if (errors['minlength']) {
      return `Must be at least ${errors['minlength'].requiredLength} characters.`;
    }
    if (errors['maxlength']) {
      return `Cannot exceed ${errors['maxlength'].requiredLength} characters.`;
    }
    if (errors['min']) {
      return `Minimum value is ${errors['min'].min}.`;
    }
    if (errors['max']) {
      return `Maximum value is ${errors['max'].max}.`;
    }

    return 'Invalid field value.';
  }
}
