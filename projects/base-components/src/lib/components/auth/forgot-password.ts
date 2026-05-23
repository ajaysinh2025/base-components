import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldComponent } from '../field/field';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'hr-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldComponent, ButtonComponent],
  template: `
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
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .text-2xs {
      font-size: 0.65rem;
    }
  `]
})
export class ForgotPasswordComponent implements OnInit {
  private fb = inject(FormBuilder);

  @Input() title = 'Forgot Password?';
  @Input() subtitle = 'No worries! Enter your email address below to reset it';
  @Input() submitButtonText = 'Send Reset Link';
  @Input() isLoading = false;
  @Input() errorMessage = '';
  @Input() isSuccess = false;

  @Output() forgotPasswordSubmit = new EventEmitter<string>();
  @Output() backToLoginClick = new EventEmitter<void>();

  forgotForm!: FormGroup;

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
}
