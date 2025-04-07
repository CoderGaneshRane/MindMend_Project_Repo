import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirtualService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  bookSession(bookingData: any): Observable<any> {
    
   
    const formData = new FormData();
    formData.append('email', bookingData.email);
    formData.append('date', bookingData.date);
    formData.append('time', bookingData.time);


    return this.http.post<any>(`${this.apiUrl}/book-session`, formData);
  }
}
