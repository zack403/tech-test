import { Component } from '@angular/core';
import {  select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardPaymentDetails } from './core';
import * as fromCreditCard from "../app/credit-card-payment-details/state/credit-card-payment-details.reducers";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techtest';

  creditCardDetails$: Observable<CreditCardPaymentDetails[]>;

  
    constructor(private store: Store<fromCreditCard.AppState>) {
      this.creditCardDetails$ = this.store.pipe(select(fromCreditCard.getCreditCards));
      console.log(this.creditCardDetails$);
    }
}
