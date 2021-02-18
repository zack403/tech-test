import {Action} from "@ngrx/store"
import { CreditCardPaymentDetails } from "../../core/models/credit-card-payment-details.model";

export enum CreditCardActionTypes {
  LOAD_CREDIT_CARDS = "[CreditCard] Load CreditCards",
  LOAD_CREDIT_CARDS_SUCCESS = "[CreditCard] Load CreditCards Success",
  LOAD_CREDIT_CARDS_FAIL = "[CreditCard] Load CreditCards Fail",
  CREATE_CREDIT_CARD = "[CreditCard] Create CreditCard",
  CREATE_CREDIT_CARD_SUCCESS = "[CreditCard] Create CreditCard Success",
  CREATE_CREDIT_CARD_FAIL = "[CreditCard] Create CreditCard Fail",
}

export class LoadCreditCards implements Action {
  readonly type = CreditCardActionTypes.LOAD_CREDIT_CARDS;
}

export class LoadCreditCardsSuccess implements Action {
  readonly type = CreditCardActionTypes.LOAD_CREDIT_CARDS_SUCCESS;

  constructor(public payload: CreditCardPaymentDetails[]) {}
}

export class LoadCreditCardsFail implements Action {
  readonly type = CreditCardActionTypes.LOAD_CREDIT_CARDS_FAIL;

  constructor(public payload: string) {}
}


export class CreateCreditCard implements Action {
  readonly type = CreditCardActionTypes.CREATE_CREDIT_CARD_SUCCESS;

  constructor(public payload: CreditCardPaymentDetails) {}
}

export class CreateCreditCardSuccess implements Action {
  readonly type = CreditCardActionTypes.CREATE_CREDIT_CARD_SUCCESS;

  constructor(public payload: CreditCardPaymentDetails) {}
}

export class CreateCreditCardFail implements Action {
  readonly type = CreditCardActionTypes.CREATE_CREDIT_CARD_FAIL;

  constructor(public payload: string) {}
}



export type Actions =
  | LoadCreditCards
  | LoadCreditCardsSuccess
  | LoadCreditCardsFail
  | CreateCreditCard
  | CreateCreditCardSuccess
  | CreateCreditCardFail