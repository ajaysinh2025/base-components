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
    <div class="w-full max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-premium rounded-3xl p-8 transition-premium">
      
      <!-- 1. INITIAL REGISTRATION FORM STATE -->
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

        <!-- Registration Form -->
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4">
          
          <!-- Full Name -->
          <hr-field
            label="Full Name *"
            placeholder="John Doe"
            type="text"
            prefixIcon="fas fa-user"
            formControlName="name"
            [required]="true"
          ></hr-field>

          <!-- Shop Name (Conditional) -->
          <hr-field
            *ngIf="showShopName"
            label="Shop Name *"
            placeholder="e.g. Fresh Veggies Shop"
            type="text"
            prefixIcon="fas fa-store"
            formControlName="shopName"
            [required]="true"
          ></hr-field>

          <!-- Email Address -->
          <hr-field
            label="Email Address *"
            placeholder="yourname@example.com"
            type="email"
            prefixIcon="fas fa-envelope"
            formControlName="email"
            [required]="true"
          ></hr-field>

          <!-- Password -->
          <div class="relative w-full">
            <hr-field
              label="Password *"
              placeholder="••••••••"
              [type]="showPassword ? 'text' : 'password'"
              prefixIcon="fas fa-lock"
              formControlName="password"
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
              label="Confirm Password *"
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
          <div class="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 rounded-xl space-y-1.5" *ngIf="passwordValue || confirmPasswordValue">
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

          <!-- Phone (Conditional) -->
          <hr-field
            *ngIf="showPhone"
            label="Phone Number"
            placeholder="e.g. 9876543210"
            type="text"
            prefixIcon="fas fa-phone-alt"
            formControlName="phone"
          ></hr-field>

          <!-- Address (Conditional) -->
          <hr-field
            *ngIf="showAddress"
            label="Address"
            placeholder="e.g. New Delhi, India"
            type="text"
            prefixIcon="fas fa-map-marker-alt"
            formControlName="address"
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
              [disabled]="registerForm.invalid || !isRegistrationFormValid"
              class="w-full"
            >
              {{ submitButtonText }}
            </hr-button>
          </div>

        </form>

        <!-- Bottom Link -->
        <div class="mt-6 text-center text-xs font-medium text-slate-500 dark:text-slate-400">
          Already have an account?
          <a
            (click)="loginClick.emit()"
            class="font-bold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 cursor-pointer transition-colors"
          >
            Sign In
          </a>
        </div>
      </ng-container>

      <!-- 2. EMAIL CODE VERIFICATION STATE -->
      <ng-template #verificationState>
        
        <!-- Verification Header -->
        <div class="text-center mb-6">
          <div class="h-12 w-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 font-black text-xl mx-auto mb-4 animate-pulse">
            <i class="far fa-paper-plane text-lg"></i>
          </div>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-1.5">Verify Your Email</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">We sent a verification code to complete registration</p>
        </div>

        <div class="text-center p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800 rounded-2xl mb-5">
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            We've sent a 6-digit verification code to <strong class="text-slate-900 dark:text-white">{{ verificationEmail }}</strong>. Please check your inbox.
          </p>
        </div>

        <!-- General Error Alert -->
        <div *ngIf="errorMessage" class="mb-5 p-3.5 bg-danger-50 dark:bg-danger-950/20 text-danger-600 dark:text-danger-400 border border-danger-100 dark:border-danger-900/50 rounded-xl text-xs font-semibold flex items-center gap-2">
          <i class="fas fa-exclamation-circle text-sm"></i>
          <span>{{ errorMessage }}</span>
        </div>

        <form [formGroup]="verificationForm" (ngSubmit)="onVerifySubmit()" class="space-y-5">
          
          <!-- Verification Code Field -->
          <div class="space-y-1">
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 text-center">Enter 6-Digit Code</label>
            <input
              type="text"
              maxlength="6"
              formControlName="verificationCode"
              class="block w-full px-3.5 py-3 text-lg rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 tracking-widest text-center font-mono font-bold transition-premium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder="000000"
            />
          </div>

          <!-- Submit Button -->
          <hr-button
            type="submit"
            variant="primary"
            size="md"
            [loading]="isLoading"
            [disabled]="verificationForm.invalid"
            class="w-full"
          >
            Complete Registration
          </hr-button>

          <!-- Verification Options -->
          <div class="flex items-center justify-between text-xs pt-1 select-none font-bold">
            <button
              type="button"
              class="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors flex items-center gap-1 focus:outline-none bg-transparent border-0 cursor-pointer"
              (click)="editInfoClick.emit()"
            >
              <i class="fas fa-arrow-left text-[10px]"></i> Edit Info
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
  `]
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);

  @Input() title = 'Create Account';
  @Input() subtitle = 'Get started with your free account today';
  @Input() submitButtonText = 'Sign Up';
  @Input() isLoading = false;
  @Input() errorMessage = '';

  // Configurable options
  @Input() showShopName = false;
  @Input() showPhone = false;
  @Input() showAddress = false;

  // Step 2 variables
  @Input() isVerificationStep = false;
  @Input() resendCooldown = 0;
  @Input() verificationEmail = '';

  @Output() registerSubmit = new EventEmitter<any>();
  @Output() verifySubmit = new EventEmitter<string>();
  @Output() editInfoClick = new EventEmitter<void>();
  @Output() resendCodeClick = new EventEmitter<void>();
  @Output() loginClick = new EventEmitter<void>();

  registerForm!: FormGroup;
  verificationForm!: FormGroup;

  showPassword = false;
  showConfirmPassword = false;

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });

    if (this.showShopName) {
      this.registerForm.addControl('shopName', this.fb.control('', Validators.required));
    }
    if (this.showPhone) {
      this.registerForm.addControl('phone', this.fb.control(''));
    }
    if (this.showAddress) {
      this.registerForm.addControl('address', this.fb.control(''));
    }

    this.registerForm.addValidators(this.passwordMatchValidator);

    // Initializing Step 2 verification form
    this.verificationForm = this.fb.group({
      verificationCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
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

  get passwordValue(): string {
    return this.registerForm?.get('password')?.value || '';
  }

  get confirmPasswordValue(): string {
    return this.registerForm?.get('confirmPassword')?.value || '';
  }

  get hasMinLength(): boolean {
    return this.passwordValue.length >= 8;
  }

  get hasCapitalLetter(): boolean {
    return /[A-Z]/.test(this.passwordValue);
  }

  get hasSpecialSymbol(): boolean {
    return /[!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?~`]/.test(this.passwordValue);
  }

  get passwordsMatch(): boolean {
    return this.passwordValue !== '' && this.passwordValue === this.confirmPasswordValue;
  }

  get isRegistrationFormValid(): boolean {
    return this.hasMinLength && this.hasCapitalLetter && this.hasSpecialSymbol && this.passwordsMatch;
  }

  onSubmit() {
    if (this.registerForm.valid && this.isRegistrationFormValid) {
      this.registerSubmit.emit(this.registerForm.value);
    }
  }

  onVerifySubmit() {
    if (this.verificationForm.valid) {
      this.verifySubmit.emit(this.verificationForm.get('verificationCode')?.value);
    }
  }
}
