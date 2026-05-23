import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FieldComponent } from '../field/field';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'hr-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldComponent, ButtonComponent],
  template: `
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
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);

  @Input() title = 'Create Account';
  @Input() subtitle = 'Get started with your free account today';
  @Input() submitButtonText = 'Sign Up';
  @Input() isLoading = false;
  @Input() errorMessage = '';

  @Output() registerSubmit = new EventEmitter<any>();
  @Output() loginClick = new EventEmitter<void>();

  registerForm!: FormGroup;

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

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }

  getConfirmPasswordError(): string {
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
}
