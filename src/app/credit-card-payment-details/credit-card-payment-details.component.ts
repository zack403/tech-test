import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCardPaymentDetails, PaymentService, ToasterService } from '../core';
import { expiryDateValidator } from '../shared/expiry-date-validator.directive';
// import {CreditCardDetailsActionTypes} from "../store/actions"
import * as creditCardsActions from "../../app/credit-card-payment-details/state/credit-card-payment-details.actions";
import * as fromCreditCard from "../../app/credit-card-payment-details/state/credit-card-payment-details.reducers";


@Component({
  selector: 'app-credit-card-payment-details-page',
  templateUrl: './credit-card-payment-details.component.html',
  styleUrls: ['./credit-card-payment-details.component.css']
})
export class CreditCardPaymentDetailsComponent implements OnInit {
  creditCardPaymentDetailsForm: FormGroup;
  submitted: boolean = false;
  creditCardDetails$: Observable<CreditCardPaymentDetails[]>;



  constructor(
    private paymentSvc: PaymentService, 
    private toasterSvc: ToasterService,
    private store: Store<fromCreditCard.AppState>
  ) {
    
  }

  ngOnInit(): void {
    this.creditCardPaymentDetailsForm = new FormGroup({
      cardHolder: new FormControl('', [Validators.required]),
      creditCardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      expirationDate: new FormControl('', [expiryDateValidator()]),
      amount: new FormControl('', [Validators.pattern(/^[0-9]*$/), Validators.min(1), Validators.required]),
      securityCode: new FormControl('', [Validators.pattern(/^[0-9]*$/), Validators.minLength(3), Validators.maxLength(3)]),
      year: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required])
    });
  }

  get formInputAccessor(){
    return this.creditCardPaymentDetailsForm.controls;
  }

  onSubmit() {
      this.submitted = true;
      this.paymentSvc.addPayment(this.creditCardPaymentDetailsForm.value).subscribe((res) => {
        this.submitted = false;
        
        this.store.dispatch(new creditCardsActions.CreateCreditCard(this.creditCardPaymentDetailsForm.value));


        this.toasterSvc.Success("successful");
      }, err => {
          this.submitted = false;
          this.toasterSvc.Error("Something failed");
          this.store.dispatch(new creditCardsActions.CreateCreditCard(this.creditCardPaymentDetailsForm.value));

          // this.store.dispatch({
          //   type: CreditCardDetailsActionTypes.ADD_CREDIT_CARD,
          //   payload: this.creditCardPaymentDetailsForm.value
          // });
      })
  }

  monthChanged(value: number) {
    this.creditCardPaymentDetailsForm.value.month = value;
  }

  yearChanged(value: number) {
    this.creditCardPaymentDetailsForm.value.expirationDate = new Date(this.creditCardPaymentDetailsForm.value.year, this.creditCardPaymentDetailsForm.value.month);
  }

}
