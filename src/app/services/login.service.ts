import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8000'; // Adjust FastAPI URL if different

  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this.http.post(`${this.baseUrl}/register`, body.toString(), { headers });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`); // Replace with actual login endpoint if needed
  }
}
