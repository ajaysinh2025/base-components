import * as i0 from '@angular/core';
import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

declare class ButtonComponent {
    type: 'button' | 'submit' | 'reset';
    variant: 'primary' | 'secondary' | 'danger' | 'outline';
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
    loading: boolean;
    icon: string;
    iconPosition: 'left' | 'right';
    variantClasses: {
        primary: string;
        secondary: string;
        danger: string;
        outline: string;
    };
    sizeClasses: {
        sm: string;
        md: string;
        lg: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "hr-button", never, { "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class ButtonGroupComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonGroupComponent, "hr-button-group", never, {}, {}, never, ["*"], true, never>;
}

declare class FieldComponent implements ControlValueAccessor, OnInit {
    ngControl: NgControl;
    id: string;
    label: string;
    labelStyle: 'floating' | 'stacked';
    type: 'text' | 'email' | 'number' | 'date' | 'select' | 'textarea' | 'checkbox' | 'password';
    placeholder: string;
    hint: string;
    prefixIcon: string;
    suffixIcon: string;
    required: boolean;
    options: {
        value: any;
        label: string;
    }[];
    rows: number;
    customError: string;
    private _value;
    disabled: boolean;
    onChange: any;
    onTouched: any;
    constructor(ngControl: NgControl);
    ngOnInit(): void;
    get value(): any;
    set value(val: any);
    writeValue(val: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    onValueChange(val: any): void;
    onBlur(): void;
    get isInvalid(): boolean;
    get errorMessage(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldComponent, [{ optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldComponent, "hr-field", never, { "id": { "alias": "id"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelStyle": { "alias": "labelStyle"; "required": false; }; "type": { "alias": "type"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "required": { "alias": "required"; "required": false; }; "options": { "alias": "options"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "customError": { "alias": "customError"; "required": false; }; }, {}, never, never, true, never>;
}

interface ColumnConfig {
    key: string;
    label: string;
    sortable?: boolean;
    filterable?: boolean;
    filterOptions?: {
        value: any;
        label: string;
    }[];
    type?: 'text' | 'number' | 'date' | 'badge' | 'custom';
    badgeClassMap?: {
        [value: string]: string;
    };
}
interface PaginationConfig {
    pageIndex: number;
    pageSize: number;
    totalItems: number;
    pageSizeOptions?: number[];
}
interface RowAction {
    id: string;
    label: string;
    icon?: string;
    class?: string;
}
interface TableAction {
    id: string;
    label: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
}
declare class TableComponent {
    data: any[];
    columns: ColumnConfig[];
    loading: boolean;
    showCounter: boolean;
    searchable: boolean;
    searchPlaceholder: string;
    emptyTitle: string;
    emptySubtitle: string;
    customTemplates: {
        [columnKey: string]: any;
    };
    rowActions: RowAction[];
    tableActions: TableAction[];
    pagination: boolean;
    paginationConfig: PaginationConfig;
    pageSizeOptions: number[];
    sortChange: EventEmitter<{
        key: string;
        direction: "asc" | "desc" | "";
    }>;
    pageChange: EventEmitter<{
        pageIndex: number;
        pageSize: number;
    }>;
    searchChange: EventEmitter<string>;
    filterChange: EventEmitter<{
        [columnKey: string]: string;
    }>;
    rowActionClick: EventEmitter<{
        actionId: string;
        row: any;
    }>;
    tableActionClick: EventEmitter<string>;
    searchTerm: string;
    columnFilters: {
        [key: string]: string;
    };
    sortKey: string;
    sortDirection: 'asc' | 'desc' | '';
    get showToolbar(): boolean;
    get totalColumns(): number;
    get totalPages(): number;
    getRowNumber(index: number): number;
    getShowingStart(): number;
    getShowingEnd(): number;
    onSearchChange(): void;
    onFilterChange(columnKey: string): void;
    onHeaderClick(col: ColumnConfig): void;
    onPageChange(pageIndex: number): void;
    onPageSizeChange(pageSize: number): void;
    getBadgeClass(col: ColumnConfig, val: any): string;
    getVisiblePages(): number[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "hr-table", never, { "data": { "alias": "data"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "showCounter": { "alias": "showCounter"; "required": false; }; "searchable": { "alias": "searchable"; "required": false; }; "searchPlaceholder": { "alias": "searchPlaceholder"; "required": false; }; "emptyTitle": { "alias": "emptyTitle"; "required": false; }; "emptySubtitle": { "alias": "emptySubtitle"; "required": false; }; "customTemplates": { "alias": "customTemplates"; "required": false; }; "rowActions": { "alias": "rowActions"; "required": false; }; "tableActions": { "alias": "tableActions"; "required": false; }; "pagination": { "alias": "pagination"; "required": false; }; "paginationConfig": { "alias": "paginationConfig"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; }, { "sortChange": "sortChange"; "pageChange": "pageChange"; "searchChange": "searchChange"; "filterChange": "filterChange"; "rowActionClick": "rowActionClick"; "tableActionClick": "tableActionClick"; }, never, never, true, never>;
}

interface UserProfile {
    name: string;
    email: string;
    avatarUrl?: string;
    role?: string;
}
declare class HeaderComponent {
    pageTitle: string;
    pageSubtitle: string;
    showDefaultLogo: boolean;
    showNotifications: boolean;
    hasUnreadNotifications: boolean;
    user: UserProfile | null;
    notificationClick: EventEmitter<void>;
    menuOptionClick: EventEmitter<string>;
    isProfileMenuOpen: boolean;
    toggleProfileMenu(): void;
    getInitials(name: string): string;
    onMenuOptionClick(option: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "hr-header", never, { "pageTitle": { "alias": "pageTitle"; "required": false; }; "pageSubtitle": { "alias": "pageSubtitle"; "required": false; }; "showDefaultLogo": { "alias": "showDefaultLogo"; "required": false; }; "showNotifications": { "alias": "showNotifications"; "required": false; }; "hasUnreadNotifications": { "alias": "hasUnreadNotifications"; "required": false; }; "user": { "alias": "user"; "required": false; }; }, { "notificationClick": "notificationClick"; "menuOptionClick": "menuOptionClick"; }, never, ["[logo]"], true, never>;
}

interface NavItem {
    label: string;
    route: string;
    icon?: string;
}
declare class NavbarComponent {
    brandName: string;
    brandSubtitle: string;
    navItems: NavItem[];
    showFooterVersion: boolean;
    version: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavbarComponent, "hr-navbar", never, { "brandName": { "alias": "brandName"; "required": false; }; "brandSubtitle": { "alias": "brandSubtitle"; "required": false; }; "navItems": { "alias": "navItems"; "required": false; }; "showFooterVersion": { "alias": "showFooterVersion"; "required": false; }; "version": { "alias": "version"; "required": false; }; }, {}, never, ["[footer]"], true, never>;
}

declare class SidePanelComponent {
    isOpen: boolean;
    title: string;
    subtitle: string;
    showFooter: boolean;
    closeOnBackdropClick: boolean;
    close: EventEmitter<void>;
    onBackdropClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidePanelComponent, "hr-side-panel", never, { "isOpen": { "alias": "isOpen"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "showFooter": { "alias": "showFooter"; "required": false; }; "closeOnBackdropClick": { "alias": "closeOnBackdropClick"; "required": false; }; }, { "close": "close"; }, never, ["*", "[footer]"], true, never>;
}

declare class ModalComponent {
    isOpen: boolean;
    title: string;
    subtitle: string;
    size: 'sm' | 'md' | 'lg' | 'xl';
    showFooter: boolean;
    hasCustomFooter: boolean;
    cancelText: string;
    confirmText: string;
    confirmDisabled: boolean;
    closeOnBackdropClick: boolean;
    close: EventEmitter<void>;
    confirm: EventEmitter<void>;
    sizeClasses: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    onBackdropClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "hr-modal", never, { "isOpen": { "alias": "isOpen"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "size": { "alias": "size"; "required": false; }; "showFooter": { "alias": "showFooter"; "required": false; }; "hasCustomFooter": { "alias": "hasCustomFooter"; "required": false; }; "cancelText": { "alias": "cancelText"; "required": false; }; "confirmText": { "alias": "confirmText"; "required": false; }; "confirmDisabled": { "alias": "confirmDisabled"; "required": false; }; "closeOnBackdropClick": { "alias": "closeOnBackdropClick"; "required": false; }; }, { "close": "close"; "confirm": "confirm"; }, never, ["*", "[footer]"], true, never>;
}

interface TabItem {
    id: string;
    label: string;
    icon?: string;
    badge?: string | number;
}
declare class TabsComponent {
    tabs: TabItem[];
    activeTabId: string;
    tabChange: EventEmitter<string>;
    selectTab(tabId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "hr-tabs", never, { "tabs": { "alias": "tabs"; "required": false; }; "activeTabId": { "alias": "activeTabId"; "required": false; }; }, { "tabChange": "tabChange"; }, never, ["*"], true, never>;
}

declare class LoginComponent implements OnInit {
    private fb;
    title: string;
    subtitle: string;
    submitButtonText: string;
    isLoading: boolean;
    errorMessage: string;
    showRegisterLink: boolean;
    loginSubmit: EventEmitter<any>;
    forgotPasswordClick: EventEmitter<void>;
    registerClick: EventEmitter<void>;
    loginForm: FormGroup;
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "hr-login", never, { "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "submitButtonText": { "alias": "submitButtonText"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "showRegisterLink": { "alias": "showRegisterLink"; "required": false; }; }, { "loginSubmit": "loginSubmit"; "forgotPasswordClick": "forgotPasswordClick"; "registerClick": "registerClick"; }, never, never, true, never>;
}

declare class RegisterComponent implements OnInit {
    private fb;
    title: string;
    subtitle: string;
    submitButtonText: string;
    isLoading: boolean;
    errorMessage: string;
    registerSubmit: EventEmitter<any>;
    loginClick: EventEmitter<void>;
    registerForm: FormGroup;
    ngOnInit(): void;
    passwordMatchValidator(control: AbstractControl): ValidationErrors | null;
    getConfirmPasswordError(): string;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RegisterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RegisterComponent, "hr-register", never, { "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "submitButtonText": { "alias": "submitButtonText"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; }, { "registerSubmit": "registerSubmit"; "loginClick": "loginClick"; }, never, never, true, never>;
}

declare class ForgotPasswordComponent implements OnInit {
    private fb;
    title: string;
    subtitle: string;
    submitButtonText: string;
    isLoading: boolean;
    errorMessage: string;
    isSuccess: boolean;
    forgotPasswordSubmit: EventEmitter<string>;
    backToLoginClick: EventEmitter<void>;
    forgotForm: FormGroup;
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ForgotPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ForgotPasswordComponent, "hr-forgot-password", never, { "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "submitButtonText": { "alias": "submitButtonText"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "isSuccess": { "alias": "isSuccess"; "required": false; }; }, { "forgotPasswordSubmit": "forgotPasswordSubmit"; "backToLoginClick": "backToLoginClick"; }, never, never, true, never>;
}

export { ButtonComponent, ButtonGroupComponent, FieldComponent, ForgotPasswordComponent, HeaderComponent, LoginComponent, ModalComponent, NavbarComponent, RegisterComponent, SidePanelComponent, TableComponent, TabsComponent };
export type { ColumnConfig, NavItem, PaginationConfig, RowAction, TabItem, TableAction, UserProfile };
