import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardPaymentDetailsRoutingModule } from './credit-card-payment-details-routing.module';
import { CreditCardPaymentDetailsComponent } from './credit-card-payment-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [CreditCardPaymentDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      progressBar: true
    }),
    ReactiveFormsModule,
    CreditCardPaymentDetailsRoutingModule
  ]
})
export class CreditCardPaymentDetailsModule { }
