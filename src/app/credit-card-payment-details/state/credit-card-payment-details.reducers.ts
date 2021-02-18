import * as creditCardActions from "./credit-card-payment-details.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { CreditCardPaymentDetails } from "../../core/models/credit-card-payment-details.model";
import * as fromRoot from "../../state/app-state";

export interface CreditCardState extends EntityState<CreditCardPaymentDetails> {
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  creditcards: CreditCardState;
}

export const creditCardAdapter: EntityAdapter<CreditCardPaymentDetails> = createEntityAdapter<CreditCardPaymentDetails>();

export const defaultCreditCard: CreditCardState = {
  ids: [],
  entities: {},
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = creditCardAdapter.getInitialState(defaultCreditCard);

export function creditCardReducer(
  state = initialState,
  action: creditCardActions.Actions
): CreditCardState {
  switch (action.type) {
    case creditCardActions.CreditCardActionTypes.LOAD_CREDIT_CARDS_SUCCESS: {
      return creditCardAdapter.addMany(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case creditCardActions.CreditCardActionTypes.LOAD_CREDIT_CARDS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case creditCardActions.CreditCardActionTypes.CREATE_CREDIT_CARD_SUCCESS: {
      return creditCardAdapter.addOne(action.payload, state);
    }
    case creditCardActions.CreditCardActionTypes.CREATE_CREDIT_CARD_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getCreditCardFeatureState = createFeatureSelector<CreditCardState>(
  "creditcards"
);

export const getCreditCards = createSelector(
    getCreditCardFeatureState,
    creditCardAdapter.getSelectors().selectAll
);

export const getCreditCardLoading = createSelector(
    getCreditCardFeatureState,
  (state: CreditCardState) => state.loading
);

export const getCreditCardLoaded = createSelector(
    getCreditCardFeatureState,
  (state: CreditCardState) => state.loaded
);

export const getError = createSelector(
    getCreditCardFeatureState,
  (state: CreditCardState) => state.error
);
