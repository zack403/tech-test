import { Component, OnInit } from '@angular/core';
import {  select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { CreditCardPaymentDetails } from '../core/models/credit-card-payment-details.model';

import * as creditCardActions from "../../app/credit-card-payment-details/state/credit-card-payment-details.actions";
import * as fromCreditCard from "../../app/credit-card-payment-details/state/credit-card-payment-details.reducers";
import { CreditCardPaymentDetails } from "../../app/core/models/credit-card-payment-details.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  creditCardDetails$: Observable<CreditCardPaymentDetails[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromCreditCard.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new creditCardActions.LoadCreditCards());
    this.creditCardDetails$ = this.store.pipe(select(fromCreditCard.getCreditCards));
    this.error$ = this.store.pipe(select(fromCreditCard.getError));
    console.log(this.creditCardDetails$);
  }

}
