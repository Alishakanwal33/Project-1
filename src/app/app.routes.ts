import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component'
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SalesComponent } from './components/sales/sales.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeComponent } from './components/barcode/barcode.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RegistrationComponent } from './components/registration/registration.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      text: 'Home'
    }
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: {
      text: 'Registration'
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      text: 'forgot-password'
    }
  },
  // { path: 'forgot-password', loadComponent: () => import('./components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },

  
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      text: 'Products'
    }
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: {
      text: 'Orders'
    }
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: {
      text: 'Customers'
    }
  },
  {
    path: 'sales',
    component: SalesComponent,
    data: {
      text: 'Sales'
    }
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: {
      text: 'Reports'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      text: 'login'
    }
  },
  {
    path: 'barcode',
    component: BarcodeComponent,
    data: {
      text: 'Barcode'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];