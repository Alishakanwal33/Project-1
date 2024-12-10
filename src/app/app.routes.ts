import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { SalesComponent } from './sales/sales.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeComponent } from './barcode/barcode.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
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
