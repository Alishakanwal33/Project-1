import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5097/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(user:object): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = user;

    return this.http.post(this.apiUrl + "api/Account/Login", body, { headers });
  }
  register(user:object): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = user;

    return this.http.post(this.apiUrl + "api/Account/Register", body, { headers });
  }
  getProductByBarcode(product:object): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = product;

    return this.http.post(this.apiUrl + "api/Account/GetProductByBarcodeNumber", body, { headers });
  }
  forgotPassword(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email }; // Create a body object with the email
  
    return this.http.post(this.apiUrl + "api/Account/ForgotPassword", body, { headers });
  }
  
  test(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.get(this.apiUrl + "WeatherForecast");
  }
}
