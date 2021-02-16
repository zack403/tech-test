import { CreditCardPaymentDetails } from '../core/models/credit-card-payment-details.model';
import { Action } from '@ngrx/store';
export const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD';

export function addCreditCardDetailsReducer(state: CreditCardPaymentDetails[] = [], action: any) {
  switch (action.type) {
    case ADD_CREDIT_CARD:
        return [...state, action.payload];
    default:
        return state;
    }
}