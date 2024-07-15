import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient , private httpClient: HttpClient) { }
  addPayment(paymentData: any): Observable<any> {
    return this.http.post(`${apiUrl}/api/payment`, paymentData);
  }

  getAllPayments(): Observable<any> { 
    return this.http.get(`${apiUrl}/api/payments`);
  }

  getAllPaymentsById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/api/payment/` + id);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/api/payment/` + id);
  }
}
