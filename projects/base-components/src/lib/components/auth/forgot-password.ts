import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FieldComponent } from '../field/field';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'hr-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldComponent, ButtonComponent],
  template: `
    <div class="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-premium rounded-3xl p-8 transition-premium">
      
      <!-- 1. EMAIL FORM STATE (STEP 1) -->
      <ng-container *ngIf="!isVerificationStep; else verificationState">
        
        <!-- Auth Header -->
        <div class="text-center mb-6">
          <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4 animate-bounce-slow">
            M
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
        <form [formGroup]="forgotForm" (ngSubmit)="onEmailSubmit()" class="space-y-5">
          
          <!-- Email Field -->
          <hr-field
            label="Email Address"
            placeholder="yourname@example.com"
            type="email"
            prefixIcon="fas fa-envelope"
            formControlName="email"
            [required]="true"
            hint="We will send you a 6-digit secure code to reset your password"
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

      <!-- 2. RESET CODE AND NEW PASSWORD STATE (STEP 2) -->
      <ng-template #verificationState>
        
        <!-- Reset Header -->
        <div class="text-center mb-6">
          <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4 animate-pulse">
            <i class="far fa-envelope-open text-lg"></i>
          </div>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-1.5">Reset Your Password</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Verify reset code to change your password</p>
        </div>

        <div class="text-center p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800 rounded-2xl mb-5">
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            A reset code has been sent to <strong class="text-slate-900 dark:text-white">{{ verificationEmail }}</strong>. Please check your email.
          </p>
        </div>

        <!-- General Error Alert -->
        <div *ngIf="errorMessage" class="mb-5 p-3.5 bg-danger-50 dark:bg-danger-950/20 text-danger-600 dark:text-danger-400 border border-danger-100 dark:border-danger-900/50 rounded-xl text-xs font-semibold flex items-center gap-2">
          <i class="fas fa-exclamation-circle text-sm"></i>
          <span>{{ errorMessage }}</span>
        </div>

        <form [formGroup]="resetForm" (ngSubmit)="onResetSubmit()" class="space-y-4">
          
          <!-- Verification Code Field -->
          <div class="space-y-1">
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 text-center">Verification Code</label>
            <input
              type="text"
              maxlength="6"
              formControlName="code"
              class="block w-full px-3.5 py-2.5 text-lg rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 tracking-widest text-center font-mono font-bold transition-premium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder="000000"
            />
          </div>

          <!-- New Password -->
          <div class="relative w-full">
            <hr-field
              label="New Password *"
              placeholder="••••••••"
              [type]="showPassword ? 'text' : 'password'"
              prefixIcon="fas fa-lock"
              formControlName="newPassword"
              [required]="true"
            ></hr-field>
            <button
              type="button"
              class="absolute right-3.5 top-[38px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none z-10 text-sm"
              (click)="showPassword = !showPassword"
            >
              <i class="fas" [class.fa-eye]="!showPassword" [class.fa-eye-slash]="showPassword"></i>
            </button>
          </div>

          <!-- Confirm Password -->
          <div class="relative w-full">
            <hr-field
              label="Confirm New Password *"
              placeholder="••••••••"
              [type]="showConfirmPassword ? 'text' : 'password'"
              prefixIcon="fas fa-lock"
              formControlName="confirmPassword"
              [required]="true"
              [customError]="getConfirmPasswordError()"
            ></hr-field>
            <button
              type="button"
              class="absolute right-3.5 top-[38px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none z-10 text-sm"
              (click)="showConfirmPassword = !showConfirmPassword"
            >
              <i class="fas" [class.fa-eye]="!showConfirmPassword" [class.fa-eye-slash]="showConfirmPassword"></i>
            </button>
          </div>

          <!-- Password checklist overlay -->
          <div class="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 rounded-xl space-y-1.5" *ngIf="newPasswordValue || confirmPasswordValue">
            <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Requirements:</div>
            <div class="flex items-center gap-2 text-xs font-semibold" [class.text-success-600]="hasMinLength" [class.text-slate-400]="!hasMinLength">
              <i class="fas text-sm" [class.fa-check-circle]="hasMinLength" [class.fa-times-circle]="!hasMinLength"></i>
              <span>At least 8 characters</span>
            </div>
            <div class="flex items-center gap-2 text-xs font-semibold" [class.text-success-600]="hasCapitalLetter" [class.text-slate-400]="!hasCapitalLetter">
              <i class="fas text-sm" [class.fa-check-circle]="hasCapitalLetter" [class.fa-times-circle]="!hasCapitalLetter"></i>
              <span>At least 1 uppercase letter</span>
            </div>
            <div class="flex items-center gap-2 text-xs font-semibold" [class.text-success-600]="hasSpecialSymbol" [class.text-slate-400]="!hasSpecialSymbol">
              <i class="fas text-sm" [class.fa-check-circle]="hasSpecialSymbol" [class.fa-times-circle]="!hasSpecialSymbol"></i>
              <span>At least 1 special character</span>
            </div>
            <div class="flex items-center gap-2 text-xs font-semibold" [class.text-success-600]="passwordsMatch" [class.text-slate-400]="!passwordsMatch">
              <i class="fas text-sm" [class.fa-check-circle]="passwordsMatch" [class.fa-times-circle]="!passwordsMatch"></i>
              <span>Passwords match</span>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <hr-button
              type="submit"
              variant="primary"
              size="md"
              [loading]="isLoading"
              [disabled]="resetForm.invalid || !isResetFormValid"
              class="w-full"
            >
              Reset Password
            </hr-button>
          </div>

          <!-- Options footer -->
          <div class="flex items-center justify-between text-xs pt-1 select-none font-bold">
            <button
              type="button"
              class="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors flex items-center gap-1 focus:outline-none bg-transparent border-0 cursor-pointer"
              (click)="editEmailClick.emit()"
            >
              <i class="fas fa-arrow-left text-[10px]"></i> Edit Email
            </button>
            <button
              type="button"
              class="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1 focus:outline-none bg-transparent border-0 cursor-pointer"
              (click)="resendCodeClick.emit()"
              [disabled]="isLoading || resendCooldown > 0"
            >
              <i class="fas fa-sync-alt text-[10px]"></i>
              {{ resendCooldown > 0 ? 'Resend in ' + resendCooldown + 's' : 'Resend Code' }}
            </button>
          </div>

        </form>

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
  @Input() submitButtonText = 'Send Reset Code';
  @Input() isLoading = false;
  @Input() errorMessage = '';

  // Configurable outputs & inputs
  @Input() isVerificationStep = false;
  @Input() resendCooldown = 0;
  @Input() verificationEmail = '';

  @Output() forgotPasswordSubmit = new EventEmitter<string>();
  @Output() resetPasswordSubmit = new EventEmitter<any>();
  @Output() editEmailClick = new EventEmitter<void>();
  @Output() resendCodeClick = new EventEmitter<void>();
  @Output() backToLoginClick = new EventEmitter<void>();

  forgotForm!: FormGroup;
  resetForm!: FormGroup;

  showPassword = false;
  showConfirmPassword = false;

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.resetForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });

    this.resetForm.addValidators(this.passwordMatchValidator);
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }

  getConfirmPasswordError(): string {
    const control = this.resetForm?.get('confirmPassword');
    if (control?.touched && control?.errors?.['passwordMismatch']) {
      return 'Passwords do not match.';
    }
    return '';
  }

  get newPasswordValue(): string {
    return this.resetForm?.get('newPassword')?.value || '';
  }

  get confirmPasswordValue(): string {
    return this.resetForm?.get('confirmPassword')?.value || '';
  }

  get hasMinLength(): boolean {
    return this.newPasswordValue.length >= 8;
  }

  get hasCapitalLetter(): boolean {
    return /[A-Z]/.test(this.newPasswordValue);
  }

  get hasSpecialSymbol(): boolean {
    return /[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?~`]/.test(this.newPasswordValue);
  }

  get passwordsMatch(): boolean {
    return this.newPasswordValue !== '' && this.newPasswordValue === this.confirmPasswordValue;
  }

  get isResetFormValid(): boolean {
    return this.hasMinLength && this.hasCapitalLetter && this.hasSpecialSymbol && this.passwordsMatch;
  }

  onEmailSubmit() {
    if (this.forgotForm.valid) {
      this.forgotPasswordSubmit.emit(this.forgotForm.get('email')?.value);
    }
  }

  onResetSubmit() {
    if (this.resetForm.valid && this.isResetFormValid) {
      this.resetPasswordSubmit.emit(this.resetForm.value);
    }
  }
}
