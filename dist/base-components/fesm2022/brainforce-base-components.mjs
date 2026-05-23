import * as i0 from '@angular/core';
import { Input, Component, Self, Optional, EventEmitter, Output, inject } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import * as i2$1 from '@angular/router';
import { RouterModule } from '@angular/router';

class ButtonComponent {
    type = 'button';
    variant = 'primary';
    size = 'md';
    disabled = false;
    loading = false;
    icon = ''; // e.g. 'fas fa-plus'
    iconPosition = 'left';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: ButtonComponent, isStandalone: true, selector: "hr-button", inputs: { type: "type", variant: "variant", size: "size", disabled: "disabled", loading: "loading", icon: "icon", iconPosition: "iconPosition" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:inline-block}.active\\:scale-98:active{transform:scale(.98)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-button', standalone: true, imports: [CommonModule], template: `
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
  `, styles: [":host{display:inline-block}.active\\:scale-98:active{transform:scale(.98)}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], variant: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }] } });

class ButtonGroupComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: ButtonGroupComponent, isStandalone: true, selector: "hr-button-group", ngImport: i0, template: `
    <div class="inline-flex rounded-lg shadow-sm -space-x-px overflow-hidden">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [":host{display:inline-block}::ng-content hr-button:first-child button{border-top-right-radius:0!important;border-bottom-right-radius:0!important}::ng-content hr-button:last-child button{border-top-left-radius:0!important;border-bottom-left-radius:0!important}::ng-content hr-button:not(:first-child):not(:last-child) button{border-radius:0!important}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-button-group', standalone: true, imports: [CommonModule], template: `
    <div class="inline-flex rounded-lg shadow-sm -space-x-px overflow-hidden">
      <ng-content></ng-content>
    </div>
  `, styles: [":host{display:inline-block}::ng-content hr-button:first-child button{border-top-right-radius:0!important;border-bottom-right-radius:0!important}::ng-content hr-button:last-child button{border-top-left-radius:0!important;border-bottom-left-radius:0!important}::ng-content hr-button:not(:first-child):not(:last-child) button{border-radius:0!important}\n"] }]
        }] });

class FieldComponent {
    ngControl;
    id = 'field-' + Math.random().toString(36).substring(2, 9);
    label = '';
    labelStyle = 'stacked';
    type = 'text';
    placeholder = '';
    hint = '';
    prefixIcon = '';
    suffixIcon = '';
    required = false;
    options = [];
    rows = 3;
    customError = '';
    _value = '';
    disabled = false;
    onChange = () => { };
    onTouched = () => { };
    constructor(ngControl) {
        this.ngControl = ngControl;
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    ngOnInit() {
        // If the standard Validators.required is set, let's reflect it visually
        if (this.ngControl?.control?.validator) {
            const validator = this.ngControl.control.validator({});
            if (validator && validator['required']) {
                this.required = true;
            }
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
    }
    writeValue(val) {
        if (val === undefined) {
            this._value = '';
        }
        else {
            this._value = val;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onValueChange(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }
    onBlur() {
        this.onTouched();
    }
    get isInvalid() {
        if (this.customError)
            return true;
        if (!this.ngControl)
            return false;
        const { touched, invalid } = this.ngControl;
        return !!(touched && invalid);
    }
    get errorMessage() {
        if (this.customError)
            return this.customError;
        if (!this.ngControl || !this.ngControl.errors)
            return '';
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: FieldComponent, deps: [{ token: i2.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: FieldComponent, isStandalone: true, selector: "hr-field", inputs: { id: "id", label: "label", labelStyle: "labelStyle", type: "type", placeholder: "placeholder", hint: "hint", prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", required: "required", options: "options", rows: "rows", customError: "customError" }, ngImport: i0, template: `
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
  `, isInline: true, styles: ["@keyframes fadeIn{0%{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn{animation:fadeIn .2s ease-out forwards}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: FieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-field', standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `
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
  `, styles: ["@keyframes fadeIn{0%{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn{animation:fadeIn .2s ease-out forwards}\n"] }]
        }], ctorParameters: () => [{ type: i2.NgControl, decorators: [{
                    type: Self
                }, {
                    type: Optional
                }] }], propDecorators: { id: [{
                type: Input
            }], label: [{
                type: Input
            }], labelStyle: [{
                type: Input
            }], type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], hint: [{
                type: Input
            }], prefixIcon: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], required: [{
                type: Input
            }], options: [{
                type: Input
            }], rows: [{
                type: Input
            }], customError: [{
                type: Input
            }] } });

class SpinnerComponent {
    size = 'md';
    color = 'brand';
    text = '';
    fullPage = false;
    overlay = false;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: SpinnerComponent, isStandalone: true, selector: "hr-spinner", inputs: { size: "size", color: "color", text: "text", fullPage: "fullPage", overlay: "overlay" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:inline-block}.animate-fade-in{animation:fadeIn .15s ease-out forwards}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.text-2xs{font-size:.65rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-spinner', standalone: true, imports: [CommonModule], template: `
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
  `, styles: [":host{display:inline-block}.animate-fade-in{animation:fadeIn .15s ease-out forwards}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.text-2xs{font-size:.65rem}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }], text: [{
                type: Input
            }], fullPage: [{
                type: Input
            }], overlay: [{
                type: Input
            }] } });

class TableComponent {
    data = [];
    columns = [];
    loading = false;
    showCounter = true;
    searchable = true;
    searchPlaceholder = 'Search records...';
    emptyTitle = 'No Records Found';
    emptySubtitle = 'Try adjusting your search filters or add a new record to get started.';
    // Custom templates mapped by column key
    customTemplates = {};
    // Actions Config
    rowActions = [];
    tableActions = [];
    // Pagination Config
    pagination = true;
    paginationConfig = {
        pageIndex: 0,
        pageSize: 10,
        totalItems: 0
    };
    pageSizeOptions = [5, 10, 20, 50, 100];
    // Outputs
    sortChange = new EventEmitter();
    pageChange = new EventEmitter();
    searchChange = new EventEmitter();
    filterChange = new EventEmitter();
    rowActionClick = new EventEmitter();
    tableActionClick = new EventEmitter();
    // Component Internal State
    searchTerm = '';
    columnFilters = {};
    sortKey = '';
    sortDirection = '';
    get showToolbar() {
        return this.searchable || this.columns.some(c => c.filterable) || this.tableActions.length > 0;
    }
    get totalColumns() {
        let count = this.columns.length;
        if (this.showCounter)
            count++;
        if (this.rowActions.length > 0)
            count++;
        return count;
    }
    get totalPages() {
        const size = this.paginationConfig.pageSize || 10;
        return Math.ceil(this.paginationConfig.totalItems / size) || 1;
    }
    getRowNumber(index) {
        return (this.paginationConfig.pageIndex * this.paginationConfig.pageSize) + index + 1;
    }
    getShowingStart() {
        if (this.paginationConfig.totalItems === 0)
            return 0;
        return (this.paginationConfig.pageIndex * this.paginationConfig.pageSize) + 1;
    }
    getShowingEnd() {
        const end = (this.paginationConfig.pageIndex + 1) * this.paginationConfig.pageSize;
        return Math.min(end, this.paginationConfig.totalItems);
    }
    onSearchChange() {
        this.searchChange.emit(this.searchTerm);
    }
    onFilterChange(columnKey) {
        this.filterChange.emit(this.columnFilters);
    }
    onHeaderClick(col) {
        if (!col.sortable)
            return;
        if (this.sortKey !== col.key) {
            this.sortKey = col.key;
            this.sortDirection = 'asc';
        }
        else {
            if (this.sortDirection === 'asc') {
                this.sortDirection = 'desc';
            }
            else if (this.sortDirection === 'desc') {
                this.sortDirection = '';
                this.sortKey = '';
            }
            else {
                this.sortDirection = 'asc';
            }
        }
        this.sortChange.emit({
            key: this.sortKey,
            direction: this.sortDirection
        });
    }
    onPageChange(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.totalPages)
            return;
        this.paginationConfig.pageIndex = pageIndex;
        this.pageChange.emit({
            pageIndex: this.paginationConfig.pageIndex,
            pageSize: this.paginationConfig.pageSize
        });
    }
    onPageSizeChange(pageSize) {
        this.paginationConfig.pageSize = pageSize;
        this.paginationConfig.pageIndex = 0; // reset to first page
        this.pageChange.emit({
            pageIndex: 0,
            pageSize: this.paginationConfig.pageSize
        });
    }
    getBadgeClass(col, val) {
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
    getVisiblePages() {
        const total = this.totalPages;
        const current = this.paginationConfig.pageIndex;
        const pages = [];
        if (total <= 5) {
            for (let i = 0; i < total; i++)
                pages.push(i);
        }
        else {
            if (current <= 2) {
                pages.push(0, 1, 2, 3, -1, total - 1);
            }
            else if (current >= total - 3) {
                pages.push(0, -1, total - 4, total - 3, total - 2, total - 1);
            }
            else {
                pages.push(0, -1, current - 1, current, current + 1, -1, total - 1);
            }
        }
        return pages;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: TableComponent, isStandalone: true, selector: "hr-table", inputs: { data: "data", columns: "columns", loading: "loading", showCounter: "showCounter", searchable: "searchable", searchPlaceholder: "searchPlaceholder", emptyTitle: "emptyTitle", emptySubtitle: "emptySubtitle", customTemplates: "customTemplates", rowActions: "rowActions", tableActions: "tableActions", pagination: "pagination", paginationConfig: "paginationConfig", pageSizeOptions: "pageSizeOptions" }, outputs: { sortChange: "sortChange", pageChange: "pageChange", searchChange: "searchChange", filterChange: "filterChange", rowActionClick: "rowActionClick", tableActionClick: "tableActionClick" }, ngImport: i0, template: `
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
        <hr-spinner *ngIf="loading" [overlay]="true" text="Loading..."></hr-spinner>

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
  `, isInline: true, styles: [":host{display:block;width:100%}.text-2xs{font-size:.65rem}.text-3xs{font-size:.55rem}.active\\:scale-98:active{transform:scale(.98)}.active\\:scale-90:active{transform:scale(.9)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: SpinnerComponent, selector: "hr-spinner", inputs: ["size", "color", "text", "fullPage", "overlay"] }, { kind: "pipe", type: i1.DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-table', standalone: true, imports: [CommonModule, FormsModule, SpinnerComponent], template: `
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
        <hr-spinner *ngIf="loading" [overlay]="true" text="Loading..."></hr-spinner>

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
  `, styles: [":host{display:block;width:100%}.text-2xs{font-size:.65rem}.text-3xs{font-size:.55rem}.active\\:scale-98:active{transform:scale(.98)}.active\\:scale-90:active{transform:scale(.9)}\n"] }]
        }], propDecorators: { data: [{
                type: Input
            }], columns: [{
                type: Input
            }], loading: [{
                type: Input
            }], showCounter: [{
                type: Input
            }], searchable: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], emptyTitle: [{
                type: Input
            }], emptySubtitle: [{
                type: Input
            }], customTemplates: [{
                type: Input
            }], rowActions: [{
                type: Input
            }], tableActions: [{
                type: Input
            }], pagination: [{
                type: Input
            }], paginationConfig: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], sortChange: [{
                type: Output
            }], pageChange: [{
                type: Output
            }], searchChange: [{
                type: Output
            }], filterChange: [{
                type: Output
            }], rowActionClick: [{
                type: Output
            }], tableActionClick: [{
                type: Output
            }] } });

class HeaderComponent {
    pageTitle = '';
    pageSubtitle = '';
    showDefaultLogo = true;
    showNotifications = true;
    hasUnreadNotifications = false;
    user = null;
    notificationClick = new EventEmitter();
    menuOptionClick = new EventEmitter();
    isProfileMenuOpen = false;
    toggleProfileMenu() {
        this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }
    getInitials(name) {
        if (!name)
            return 'U';
        const parts = name.trim().split(/\s+/);
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return parts[0][0].toUpperCase();
    }
    onMenuOptionClick(option) {
        this.isProfileMenuOpen = false;
        this.menuOptionClick.emit(option);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: HeaderComponent, isStandalone: true, selector: "hr-header", inputs: { pageTitle: "pageTitle", pageSubtitle: "pageSubtitle", showDefaultLogo: "showDefaultLogo", showNotifications: "showNotifications", hasUnreadNotifications: "hasUnreadNotifications", user: "user" }, outputs: { notificationClick: "notificationClick", menuOptionClick: "menuOptionClick" }, ngImport: i0, template: `
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
  `, isInline: true, styles: ["@keyframes slideDown{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}.animate-slideDown{animation:slideDown .15s cubic-bezier(.16,1,.3,1) forwards}.text-3xs{font-size:.65rem}.text-4xs{font-size:.55rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-header', standalone: true, imports: [CommonModule], template: `
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
  `, styles: ["@keyframes slideDown{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}.animate-slideDown{animation:slideDown .15s cubic-bezier(.16,1,.3,1) forwards}.text-3xs{font-size:.65rem}.text-4xs{font-size:.55rem}\n"] }]
        }], propDecorators: { pageTitle: [{
                type: Input
            }], pageSubtitle: [{
                type: Input
            }], showDefaultLogo: [{
                type: Input
            }], showNotifications: [{
                type: Input
            }], hasUnreadNotifications: [{
                type: Input
            }], user: [{
                type: Input
            }], notificationClick: [{
                type: Output
            }], menuOptionClick: [{
                type: Output
            }] } });

class NavbarComponent {
    brandName = 'Market Yard';
    brandSubtitle = 'Management Portal';
    navItems = [];
    showFooterVersion = true;
    version = '1.0.0';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: NavbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: NavbarComponent, isStandalone: true, selector: "hr-navbar", inputs: { brandName: "brandName", brandSubtitle: "brandSubtitle", navItems: "navItems", showFooterVersion: "showFooterVersion", version: "version" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:block;height:100%}.text-4xs{font-size:.55rem}a{color:#94a3b8}a:hover{color:#f8fafc;background:#ffffff08}a.active{color:#fff!important;background:#4f46e5!important;box-shadow:0 4px 12px #4f46e526}a.active i{color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i2$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i2$1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: NavbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-navbar', standalone: true, imports: [CommonModule, RouterModule], template: `
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
  `, styles: [":host{display:block;height:100%}.text-4xs{font-size:.55rem}a{color:#94a3b8}a:hover{color:#f8fafc;background:#ffffff08}a.active{color:#fff!important;background:#4f46e5!important;box-shadow:0 4px 12px #4f46e526}a.active i{color:#fff}\n"] }]
        }], propDecorators: { brandName: [{
                type: Input
            }], brandSubtitle: [{
                type: Input
            }], navItems: [{
                type: Input
            }], showFooterVersion: [{
                type: Input
            }], version: [{
                type: Input
            }] } });

class SidePanelComponent {
    isOpen = false;
    title = '';
    subtitle = '';
    showFooter = false;
    closeOnBackdropClick = true;
    close = new EventEmitter();
    onBackdropClick() {
        if (this.closeOnBackdropClick) {
            this.close.emit();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: SidePanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: SidePanelComponent, isStandalone: true, selector: "hr-side-panel", inputs: { isOpen: "isOpen", title: "title", subtitle: "subtitle", showFooter: "showFooter", closeOnBackdropClick: "closeOnBackdropClick" }, outputs: { close: "close" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [".text-4xs{font-size:.55rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: SidePanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-side-panel', standalone: true, imports: [CommonModule], template: `
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
  `, styles: [".text-4xs{font-size:.55rem}\n"] }]
        }], propDecorators: { isOpen: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], showFooter: [{
                type: Input
            }], closeOnBackdropClick: [{
                type: Input
            }], close: [{
                type: Output
            }] } });

class ModalComponent {
    isOpen = false;
    title = '';
    subtitle = '';
    size = 'md';
    showFooter = true;
    hasCustomFooter = false;
    cancelText = 'Cancel';
    confirmText = 'Confirm';
    confirmDisabled = false;
    closeOnBackdropClick = true;
    close = new EventEmitter();
    confirm = new EventEmitter();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: ModalComponent, isStandalone: true, selector: "hr-modal", inputs: { isOpen: "isOpen", title: "title", subtitle: "subtitle", size: "size", showFooter: "showFooter", hasCustomFooter: "hasCustomFooter", cancelText: "cancelText", confirmText: "confirmText", confirmDisabled: "confirmDisabled", closeOnBackdropClick: "closeOnBackdropClick" }, outputs: { close: "close", confirm: "confirm" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [".text-4xs{font-size:.55rem}.active\\:scale-98:active{transform:scale(.98)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-modal', standalone: true, imports: [CommonModule], template: `
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
  `, styles: [".text-4xs{font-size:.55rem}.active\\:scale-98:active{transform:scale(.98)}\n"] }]
        }], propDecorators: { isOpen: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], size: [{
                type: Input
            }], showFooter: [{
                type: Input
            }], hasCustomFooter: [{
                type: Input
            }], cancelText: [{
                type: Input
            }], confirmText: [{
                type: Input
            }], confirmDisabled: [{
                type: Input
            }], closeOnBackdropClick: [{
                type: Input
            }], close: [{
                type: Output
            }], confirm: [{
                type: Output
            }] } });

class TabsComponent {
    tabs = [];
    activeTabId = '';
    tabChange = new EventEmitter();
    selectTab(tabId) {
        if (this.activeTabId !== tabId) {
            this.activeTabId = tabId;
            this.tabChange.emit(tabId);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: TabsComponent, isStandalone: true, selector: "hr-tabs", inputs: { tabs: "tabs", activeTabId: "activeTabId" }, outputs: { tabChange: "tabChange" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:block;width:100%}.text-4xs{font-size:.55rem}.active\\:scale-98:active{transform:scale(.98)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-tabs', standalone: true, imports: [CommonModule], template: `
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
  `, styles: [":host{display:block;width:100%}.text-4xs{font-size:.55rem}.active\\:scale-98:active{transform:scale(.98)}\n"] }]
        }], propDecorators: { tabs: [{
                type: Input
            }], activeTabId: [{
                type: Input
            }], tabChange: [{
                type: Output
            }] } });

class LoginComponent {
    fb = inject(FormBuilder);
    title = 'Sign In';
    subtitle = 'Welcome back! Enter your details to continue';
    submitButtonText = 'Sign In';
    isLoading = false;
    errorMessage = '';
    showRegisterLink = true;
    loginSubmit = new EventEmitter();
    forgotPasswordClick = new EventEmitter();
    registerClick = new EventEmitter();
    loginForm;
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]],
            rememberMe: [false]
        });
    }
    onSubmit() {
        if (this.loginForm.valid) {
            this.loginSubmit.emit(this.loginForm.value);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: LoginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: LoginComponent, isStandalone: true, selector: "hr-login", inputs: { title: "title", subtitle: "subtitle", submitButtonText: "submitButtonText", isLoading: "isLoading", errorMessage: "errorMessage", showRegisterLink: "showRegisterLink" }, outputs: { loginSubmit: "loginSubmit", forgotPasswordClick: "forgotPasswordClick", registerClick: "registerClick" }, ngImport: i0, template: `
    <div class="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-premium rounded-2xl p-8 transition-premium">
      
      <!-- Auth Header -->
      <div class="text-center mb-8">
        <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4">
          H
        </div>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-1.5">{{ title }}</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ subtitle }}</p>
      </div>

      <!-- General Error Alert -->
      <div *ngIf="errorMessage" class="mb-5 p-3.5 bg-danger-50 dark:bg-danger-950/20 text-danger-600 dark:text-danger-400 border border-danger-100 dark:border-danger-900/50 rounded-xl text-xs font-semibold flex items-center gap-2">
        <i class="fas fa-exclamation-circle text-sm"></i>
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Login Form -->
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-5">
        
        <!-- Email/Username -->
        <hr-field
          label="Email Address"
          placeholder="yourname@example.com"
          type="email"
          prefixIcon="fas fa-envelope"
          formControlName="email"
          [required]="true"
        ></hr-field>

        <!-- Password -->
        <div class="space-y-1">
          <hr-field
            label="Password"
            placeholder="••••••••"
            type="password"
            prefixIcon="fas fa-lock"
            formControlName="password"
            [required]="true"
          ></hr-field>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex items-center justify-between text-xs font-bold pt-1 select-none">
          <label class="flex items-center gap-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              formControlName="rememberMe"
              class="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 transition-premium cursor-pointer"
            />
            <span>Remember me</span>
          </label>
          
          <a
            (click)="forgotPasswordClick.emit()"
            class="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 cursor-pointer transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <hr-button
            type="submit"
            variant="primary"
            size="md"
            [loading]="isLoading"
            [disabled]="loginForm.invalid"
            class="w-full"
          >
            {{ submitButtonText }}
          </hr-button>
        </div>

      </form>

      <!-- Bottom Nav Slot (e.g. "Don't have an account? Sign up") -->
      <div *ngIf="showRegisterLink" class="mt-6 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
        Don't have an account?
        <a
          (click)="registerClick.emit()"
          class="font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 cursor-pointer transition-colors"
        >
          Sign Up
        </a>
      </div>

    </div>
  `, isInline: true, styles: [":host{display:block;width:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: FieldComponent, selector: "hr-field", inputs: ["id", "label", "labelStyle", "type", "placeholder", "hint", "prefixIcon", "suffixIcon", "required", "options", "rows", "customError"] }, { kind: "component", type: ButtonComponent, selector: "hr-button", inputs: ["type", "variant", "size", "disabled", "loading", "icon", "iconPosition"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-login', standalone: true, imports: [CommonModule, ReactiveFormsModule, FieldComponent, ButtonComponent], template: `
    <div class="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-premium rounded-2xl p-8 transition-premium">
      
      <!-- Auth Header -->
      <div class="text-center mb-8">
        <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4">
          H
        </div>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-1.5">{{ title }}</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ subtitle }}</p>
      </div>

      <!-- General Error Alert -->
      <div *ngIf="errorMessage" class="mb-5 p-3.5 bg-danger-50 dark:bg-danger-950/20 text-danger-600 dark:text-danger-400 border border-danger-100 dark:border-danger-900/50 rounded-xl text-xs font-semibold flex items-center gap-2">
        <i class="fas fa-exclamation-circle text-sm"></i>
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Login Form -->
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-5">
        
        <!-- Email/Username -->
        <hr-field
          label="Email Address"
          placeholder="yourname@example.com"
          type="email"
          prefixIcon="fas fa-envelope"
          formControlName="email"
          [required]="true"
        ></hr-field>

        <!-- Password -->
        <div class="space-y-1">
          <hr-field
            label="Password"
            placeholder="••••••••"
            type="password"
            prefixIcon="fas fa-lock"
            formControlName="password"
            [required]="true"
          ></hr-field>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex items-center justify-between text-xs font-bold pt-1 select-none">
          <label class="flex items-center gap-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              formControlName="rememberMe"
              class="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 transition-premium cursor-pointer"
            />
            <span>Remember me</span>
          </label>
          
          <a
            (click)="forgotPasswordClick.emit()"
            class="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 cursor-pointer transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <hr-button
            type="submit"
            variant="primary"
            size="md"
            [loading]="isLoading"
            [disabled]="loginForm.invalid"
            class="w-full"
          >
            {{ submitButtonText }}
          </hr-button>
        </div>

      </form>

      <!-- Bottom Nav Slot (e.g. "Don't have an account? Sign up") -->
      <div *ngIf="showRegisterLink" class="mt-6 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
        Don't have an account?
        <a
          (click)="registerClick.emit()"
          class="font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 cursor-pointer transition-colors"
        >
          Sign Up
        </a>
      </div>

    </div>
  `, styles: [":host{display:block;width:100%}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], submitButtonText: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], showRegisterLink: [{
                type: Input
            }], loginSubmit: [{
                type: Output
            }], forgotPasswordClick: [{
                type: Output
            }], registerClick: [{
                type: Output
            }] } });

class RegisterComponent {
    fb = inject(FormBuilder);
    title = 'Create Account';
    subtitle = 'Get started with your free account today';
    submitButtonText = 'Sign Up';
    isLoading = false;
    errorMessage = '';
    registerSubmit = new EventEmitter();
    loginClick = new EventEmitter();
    registerForm;
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]],
            terms: [false, [Validators.requiredTrue]]
        }, {
            validators: this.passwordMatchValidator
        });
    }
    passwordMatchValidator(control) {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;
        if (password !== confirmPassword) {
            control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
            return { passwordMismatch: true };
        }
        return null;
    }
    getConfirmPasswordError() {
        const control = this.registerForm?.get('confirmPassword');
        if (control?.touched && control?.errors?.['passwordMismatch']) {
            return 'Passwords do not match.';
        }
        return '';
    }
    onSubmit() {
        if (this.registerForm.valid) {
            const { name, email, password } = this.registerForm.value;
            this.registerSubmit.emit({ name, email, password });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: RegisterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: RegisterComponent, isStandalone: true, selector: "hr-register", inputs: { title: "title", subtitle: "subtitle", submitButtonText: "submitButtonText", isLoading: "isLoading", errorMessage: "errorMessage" }, outputs: { registerSubmit: "registerSubmit", loginClick: "loginClick" }, ngImport: i0, template: `
    <div class="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-premium rounded-2xl p-8 transition-premium">
      
      <!-- Auth Header -->
      <div class="text-center mb-8">
        <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4">
          H
        </div>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-1.5">{{ title }}</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ subtitle }}</p>
      </div>

      <!-- General Error Alert -->
      <div *ngIf="errorMessage" class="mb-5 p-3.5 bg-danger-50 dark:bg-danger-950/20 text-danger-600 dark:text-danger-400 border border-danger-100 dark:border-danger-900/50 rounded-xl text-xs font-semibold flex items-center gap-2">
        <i class="fas fa-exclamation-circle text-sm"></i>
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Registration Form -->
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4">
        
        <!-- Full Name -->
        <hr-field
          label="Full Name"
          placeholder="John Doe"
          type="text"
          prefixIcon="fas fa-user"
          formControlName="name"
          [required]="true"
        ></hr-field>

        <!-- Email Address -->
        <hr-field
          label="Email Address"
          placeholder="yourname@example.com"
          type="email"
          prefixIcon="fas fa-envelope"
          formControlName="email"
          [required]="true"
        ></hr-field>

        <!-- Password -->
        <hr-field
          label="Password"
          placeholder="••••••••"
          type="password"
          prefixIcon="fas fa-lock"
          formControlName="password"
          [required]="true"
        ></hr-field>

        <!-- Confirm Password -->
        <hr-field
          label="Confirm Password"
          placeholder="••••••••"
          type="password"
          prefixIcon="fas fa-lock"
          formControlName="confirmPassword"
          [required]="true"
          [customError]="getConfirmPasswordError()"
        ></hr-field>

        <!-- Terms Agreement -->
        <div class="pt-1">
          <hr-field
            label="I agree to the Terms of Service & Privacy Policy"
            type="checkbox"
            formControlName="terms"
            [required]="true"
          ></hr-field>
        </div>

        <!-- Submit Button -->
        <div class="pt-3">
          <hr-button
            type="submit"
            variant="primary"
            size="md"
            [loading]="isLoading"
            [disabled]="registerForm.invalid"
            class="w-full"
          >
            {{ submitButtonText }}
          </hr-button>
        </div>

      </form>

      <!-- Bottom Nav Link -->
      <div class="mt-6 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
        Already have an account?
        <a
          (click)="loginClick.emit()"
          class="font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 cursor-pointer transition-colors"
        >
          Sign In
        </a>
      </div>

    </div>
  `, isInline: true, styles: [":host{display:block;width:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: FieldComponent, selector: "hr-field", inputs: ["id", "label", "labelStyle", "type", "placeholder", "hint", "prefixIcon", "suffixIcon", "required", "options", "rows", "customError"] }, { kind: "component", type: ButtonComponent, selector: "hr-button", inputs: ["type", "variant", "size", "disabled", "loading", "icon", "iconPosition"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: RegisterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-register', standalone: true, imports: [CommonModule, ReactiveFormsModule, FieldComponent, ButtonComponent], template: `
    <div class="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-premium rounded-2xl p-8 transition-premium">
      
      <!-- Auth Header -->
      <div class="text-center mb-8">
        <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4">
          H
        </div>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-1.5">{{ title }}</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ subtitle }}</p>
      </div>

      <!-- General Error Alert -->
      <div *ngIf="errorMessage" class="mb-5 p-3.5 bg-danger-50 dark:bg-danger-950/20 text-danger-600 dark:text-danger-400 border border-danger-100 dark:border-danger-900/50 rounded-xl text-xs font-semibold flex items-center gap-2">
        <i class="fas fa-exclamation-circle text-sm"></i>
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Registration Form -->
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4">
        
        <!-- Full Name -->
        <hr-field
          label="Full Name"
          placeholder="John Doe"
          type="text"
          prefixIcon="fas fa-user"
          formControlName="name"
          [required]="true"
        ></hr-field>

        <!-- Email Address -->
        <hr-field
          label="Email Address"
          placeholder="yourname@example.com"
          type="email"
          prefixIcon="fas fa-envelope"
          formControlName="email"
          [required]="true"
        ></hr-field>

        <!-- Password -->
        <hr-field
          label="Password"
          placeholder="••••••••"
          type="password"
          prefixIcon="fas fa-lock"
          formControlName="password"
          [required]="true"
        ></hr-field>

        <!-- Confirm Password -->
        <hr-field
          label="Confirm Password"
          placeholder="••••••••"
          type="password"
          prefixIcon="fas fa-lock"
          formControlName="confirmPassword"
          [required]="true"
          [customError]="getConfirmPasswordError()"
        ></hr-field>

        <!-- Terms Agreement -->
        <div class="pt-1">
          <hr-field
            label="I agree to the Terms of Service & Privacy Policy"
            type="checkbox"
            formControlName="terms"
            [required]="true"
          ></hr-field>
        </div>

        <!-- Submit Button -->
        <div class="pt-3">
          <hr-button
            type="submit"
            variant="primary"
            size="md"
            [loading]="isLoading"
            [disabled]="registerForm.invalid"
            class="w-full"
          >
            {{ submitButtonText }}
          </hr-button>
        </div>

      </form>

      <!-- Bottom Nav Link -->
      <div class="mt-6 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
        Already have an account?
        <a
          (click)="loginClick.emit()"
          class="font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 cursor-pointer transition-colors"
        >
          Sign In
        </a>
      </div>

    </div>
  `, styles: [":host{display:block;width:100%}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], submitButtonText: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], registerSubmit: [{
                type: Output
            }], loginClick: [{
                type: Output
            }] } });

class ForgotPasswordComponent {
    fb = inject(FormBuilder);
    title = 'Forgot Password?';
    subtitle = 'No worries! Enter your email address below to reset it';
    submitButtonText = 'Send Reset Link';
    isLoading = false;
    errorMessage = '';
    isSuccess = false;
    forgotPasswordSubmit = new EventEmitter();
    backToLoginClick = new EventEmitter();
    forgotForm;
    ngOnInit() {
        this.forgotForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
    onSubmit() {
        if (this.forgotForm.valid) {
            this.forgotPasswordSubmit.emit(this.forgotForm.get('email')?.value);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: ForgotPasswordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.14", type: ForgotPasswordComponent, isStandalone: true, selector: "hr-forgot-password", inputs: { title: "title", subtitle: "subtitle", submitButtonText: "submitButtonText", isLoading: "isLoading", errorMessage: "errorMessage", isSuccess: "isSuccess" }, outputs: { forgotPasswordSubmit: "forgotPasswordSubmit", backToLoginClick: "backToLoginClick" }, ngImport: i0, template: `
    <div class="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-premium rounded-2xl p-8 transition-premium">
      
      <!-- Check for Success State -->
      <ng-container *ngIf="!isSuccess; else successState">
        
        <!-- Auth Header -->
        <div class="text-center mb-8">
          <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4">
            H
          </div>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-1.5">{{ title }}</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ subtitle }}</p>
        </div>

        <!-- General Error Alert -->
        <div *ngIf="errorMessage" class="mb-5 p-3.5 bg-danger-50 dark:bg-danger-950/20 text-danger-600 dark:text-danger-400 border border-danger-100 dark:border-danger-900/50 rounded-xl text-xs font-semibold flex items-center gap-2">
          <i class="fas fa-exclamation-circle text-sm"></i>
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Forgot Form -->
        <form [formGroup]="forgotForm" (ngSubmit)="onSubmit()" class="space-y-5">
          
          <!-- Email Field -->
          <hr-field
            label="Email Address"
            placeholder="yourname@example.com"
            type="email"
            prefixIcon="fas fa-envelope"
            formControlName="email"
            [required]="true"
            hint="We will send you a secure link to reset your password"
          ></hr-field>

          <!-- Submit Button -->
          <div class="pt-2">
            <hr-button
              type="submit"
              variant="primary"
              size="md"
              [loading]="isLoading"
              [disabled]="forgotForm.invalid"
              class="w-full"
            >
              {{ submitButtonText }}
            </hr-button>
          </div>

        </form>

        <!-- Back to Login Link -->
        <div class="mt-6 text-center text-xs font-bold">
          <a
            (click)="backToLoginClick.emit()"
            class="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer flex items-center justify-center gap-2 transition-colors"
          >
            <i class="fas fa-arrow-left text-2xs"></i> Back to Sign In
          </a>
        </div>

      </ng-container>

      <!-- SUCCESS STATE TEMPLATE -->
      <ng-template #successState>
        <div class="text-center py-4">
          <!-- Check icon with ripple effect -->
          <div class="h-16 w-16 rounded-full bg-success-50 dark:bg-success-950/20 text-success-600 dark:text-success-400 flex items-center justify-center mx-auto mb-6 shadow-inner border border-success-100/50 dark:border-success-900/50">
            <i class="fas fa-check-circle text-3xl"></i>
          </div>

          <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-2.5">Check Your Email</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto mb-8">
            We have sent password recovery instructions to <br/>
            <span class="font-bold text-slate-800 dark:text-slate-200">{{ forgotForm.get('email')?.value }}</span>
          </p>

          <hr-button
            (click)="backToLoginClick.emit()"
            variant="secondary"
            size="md"
            class="w-full"
          >
            Back to Sign In
          </hr-button>
        </div>
      </ng-template>

    </div>
  `, isInline: true, styles: [":host{display:block;width:100%}.text-2xs{font-size:.65rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: FieldComponent, selector: "hr-field", inputs: ["id", "label", "labelStyle", "type", "placeholder", "hint", "prefixIcon", "suffixIcon", "required", "options", "rows", "customError"] }, { kind: "component", type: ButtonComponent, selector: "hr-button", inputs: ["type", "variant", "size", "disabled", "loading", "icon", "iconPosition"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.14", ngImport: i0, type: ForgotPasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'hr-forgot-password', standalone: true, imports: [CommonModule, ReactiveFormsModule, FieldComponent, ButtonComponent], template: `
    <div class="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-premium rounded-2xl p-8 transition-premium">
      
      <!-- Check for Success State -->
      <ng-container *ngIf="!isSuccess; else successState">
        
        <!-- Auth Header -->
        <div class="text-center mb-8">
          <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4">
            H
          </div>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-1.5">{{ title }}</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ subtitle }}</p>
        </div>

        <!-- General Error Alert -->
        <div *ngIf="errorMessage" class="mb-5 p-3.5 bg-danger-50 dark:bg-danger-950/20 text-danger-600 dark:text-danger-400 border border-danger-100 dark:border-danger-900/50 rounded-xl text-xs font-semibold flex items-center gap-2">
          <i class="fas fa-exclamation-circle text-sm"></i>
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Forgot Form -->
        <form [formGroup]="forgotForm" (ngSubmit)="onSubmit()" class="space-y-5">
          
          <!-- Email Field -->
          <hr-field
            label="Email Address"
            placeholder="yourname@example.com"
            type="email"
            prefixIcon="fas fa-envelope"
            formControlName="email"
            [required]="true"
            hint="We will send you a secure link to reset your password"
          ></hr-field>

          <!-- Submit Button -->
          <div class="pt-2">
            <hr-button
              type="submit"
              variant="primary"
              size="md"
              [loading]="isLoading"
              [disabled]="forgotForm.invalid"
              class="w-full"
            >
              {{ submitButtonText }}
            </hr-button>
          </div>

        </form>

        <!-- Back to Login Link -->
        <div class="mt-6 text-center text-xs font-bold">
          <a
            (click)="backToLoginClick.emit()"
            class="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer flex items-center justify-center gap-2 transition-colors"
          >
            <i class="fas fa-arrow-left text-2xs"></i> Back to Sign In
          </a>
        </div>

      </ng-container>

      <!-- SUCCESS STATE TEMPLATE -->
      <ng-template #successState>
        <div class="text-center py-4">
          <!-- Check icon with ripple effect -->
          <div class="h-16 w-16 rounded-full bg-success-50 dark:bg-success-950/20 text-success-600 dark:text-success-400 flex items-center justify-center mx-auto mb-6 shadow-inner border border-success-100/50 dark:border-success-900/50">
            <i class="fas fa-check-circle text-3xl"></i>
          </div>

          <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-2.5">Check Your Email</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto mb-8">
            We have sent password recovery instructions to <br/>
            <span class="font-bold text-slate-800 dark:text-slate-200">{{ forgotForm.get('email')?.value }}</span>
          </p>

          <hr-button
            (click)="backToLoginClick.emit()"
            variant="secondary"
            size="md"
            class="w-full"
          >
            Back to Sign In
          </hr-button>
        </div>
      </ng-template>

    </div>
  `, styles: [":host{display:block;width:100%}.text-2xs{font-size:.65rem}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], submitButtonText: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], isSuccess: [{
                type: Input
            }], forgotPasswordSubmit: [{
                type: Output
            }], backToLoginClick: [{
                type: Output
            }] } });

/*
 * Public API Surface of base-components
 */
// Core Components

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonGroupComponent, FieldComponent, ForgotPasswordComponent, HeaderComponent, LoginComponent, ModalComponent, NavbarComponent, RegisterComponent, SidePanelComponent, SpinnerComponent, TableComponent, TabsComponent };
//# sourceMappingURL=brainforce-base-components.mjs.map
