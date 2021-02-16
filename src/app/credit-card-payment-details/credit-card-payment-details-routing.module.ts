import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardPaymentDetailsComponent } from './credit-card-payment-details.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardPaymentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardPaymentDetailsRoutingModule { }
