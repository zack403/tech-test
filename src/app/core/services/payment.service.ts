import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {CreditCardPaymentDetails} from "../models/credit-card-payment-details.model"
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private apiService: ApiService) { }


  addPayment (body : CreditCardPaymentDetails): Observable<any> {
    return this.apiService.post('/payment', body).pipe(tap(res => {
       return res;
    }));
  }


}
