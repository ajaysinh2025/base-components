import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldComponent } from '../field/field';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'hr-login',
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
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);

  @Input() title = 'Sign In';
  @Input() subtitle = 'Welcome back! Enter your details to continue';
  @Input() submitButtonText = 'Sign In';
  @Input() isLoading = false;
  @Input() errorMessage = '';
  @Input() showRegisterLink = true;

  @Output() loginSubmit = new EventEmitter<any>();
  @Output() forgotPasswordClick = new EventEmitter<void>();
  @Output() registerClick = new EventEmitter<void>();

  loginForm!: FormGroup;

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
}
