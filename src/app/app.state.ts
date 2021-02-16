import { CreditCardPaymentDetails } from './core/models/credit-card-payment-details.model';


export interface AppState {
  readonly creditCardDetails: CreditCardPaymentDetails[];
}