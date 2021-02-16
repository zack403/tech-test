import { Component, OnInit } from '@angular/core';
import {  select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { CreditCardPaymentDetails } from '../core/models/credit-card-payment-details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  creditCardDetails$: Observable<CreditCardPaymentDetails[]>;

  
    constructor(private store: Store<AppState>) {
      this.creditCardDetails$ = this.store.pipe(select(state => state.creditCardDetails));
    }

    ngOnInit() {

    }

}
