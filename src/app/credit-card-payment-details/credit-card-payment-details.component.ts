import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { PaymentService, ToasterService } from '../core';
import { expiryDateValidator } from '../shared/expiry-date-validator.directive';


@Component({
  selector: 'app-credit-card-payment-details-page',
  templateUrl: './credit-card-payment-details.component.html',
  styleUrls: ['./credit-card-payment-details.component.css']
})
export class CreditCardPaymentDetailsComponent implements OnInit {
  creditCardPaymentDetailsForm: FormGroup;
  submitted: boolean = false;


  constructor(
    private paymentSvc: PaymentService, 
    private toasterSvc: ToasterService,
    private store: Store<AppState>
  ) {}

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
        this.store.dispatch({
          type: 'ADD_CREDIT_CARD',
          payload: this.creditCardPaymentDetailsForm.value
        });
        this.toasterSvc.Success("successful");
      }, err => {
          this.submitted = false;
          this.toasterSvc.Error("Something failed");
          this.store.dispatch({
            type: 'ADD_CREDIT_CARD',
            payload: this.creditCardPaymentDetailsForm.value
          });
      })
  }

  monthChanged(value: number) {
    this.creditCardPaymentDetailsForm.value.month = value;
  }

  yearChanged(value: number) {
    this.creditCardPaymentDetailsForm.value.expirationDate = new Date(this.creditCardPaymentDetailsForm.value.year, this.creditCardPaymentDetailsForm.value.month);
  }

}
