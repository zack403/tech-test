import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { CreditCardPaymentDetails } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techtest';

  creditCardDetails$: Observable<CreditCardPaymentDetails[]>;

  
    constructor(private store: Store<AppState>) {
      this.creditCardDetails$ = this.store.select(state => state.creditCardDetails);
    }
}
