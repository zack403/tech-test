import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreditCardPaymentDetails, PaymentService, ToasterService } from '../core';


@Component({
  selector: 'app-credit-card-payment-details-page',
  templateUrl: './credit-card-payment-details.component.html',
  styleUrls: ['./credit-card-payment-details.component.css']
})
export class CreditCardPaymentDetailsComponent implements OnInit {
  creditCardPaymentDetailsForm: FormGroup;
  submitted: boolean = false;


  constructor(
    private formBuilder: FormBuilder, 
    private paymentSvc: PaymentService, 
    private toasterSvc: ToasterService,
    private store: Store<AppState>
  ) { 
    
  }

  ngOnInit(): void {
    this.creditCardPaymentDetailsForm = this.formBuilder.group({
        cardHolder: ['', [Validators.required]],
        creditCardNumber: ['', [Validators.required]],
        expirationDate: [''],
        amount: ['', [Validators.required]],
        securityCode: ['', [Validators.minLength(3), Validators.maxLength(3)]],
        year: ['', [Validators.required]],
        month: ['', [Validators.required]]
      });
  }

  onSubmit() {
      this.submitted = true;
      this.paymentSvc.addPayment(this.creditCardPaymentDetailsForm.value).subscribe((res) => {
        this.submitted = false;
        this.store.dispatch({
          type: 'ADD_CREDIT_CARD',
          payload: this.creditCardPaymentDetailsForm.value
        });
        this.toasterSvc.Success(res);
      }, err => {
          this.submitted = false;
          this.toasterSvc.Error(err);
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
