// import { Injectable } from "@angular/core";

// import { Actions, Effect, ofType } from "@ngrx/effects";
// import { Action } from "@ngrx/store";

// import { Observable, of } from "rxjs";
// import { map, mergeMap, catchError } from "rxjs/operators";

// import { CustomerService } from "../customer.service";
// import * as creditCardActions from "../state/credit-card-payment-details.actions";
// import { CreditCardPaymentDetails } from "../../core/models/credit-card-payment-details.model";

// @Injectable()
// export class CustomerEffect {
//   constructor(
//     private actions$: Actions,
//     private customerService: CustomerService
//   ) {}

//   @Effect()
//   loadCreditCards$: Observable<Action> = this.actions$.pipe(
//     ofType<creditCardActions.LoadCreditCards>(
//         creditCardActions.CreditCardActionTypes.LOAD_CREDIT_CARDS
//     ),
//     mergeMap((action: creditCardActions.LoadCreditCards) =>
//       this.creditCardService.getCustomers().pipe(
//         map(
//           (customers: CreditCardPaymentDetails[]) =>
//             new creditCardActions.LoadCreditCardsSuccess(customers)
//         ),
//         catchError(err => of(new creditCardActions.LoadCreditCardsFail(err)))
//       )
//     )
//   );

  
//   @Effect()
//   createCreditCard$: Observable<Action> = this.actions$.pipe(
//     ofType<creditCardActions.CreateCreditCard>(
//         creditCardActions.CreditCardActionTypes.CREATE_CREDIT_CARD
//     ),
//     map((action: creditCardActions.CreateCreditCard) => action.payload),
//     mergeMap((customer: CreditCardPaymentDetails) =>
//       this.customerService.createCustomer(customer).pipe(
//         map(
//           (newCustomer: CreditCardPaymentDetails) =>
//             new creditCardActions.CreateCreditCardSuccess(newCustomer)
//         ),
//         catchError(err => of(new creditCardActions.CreateCreditCardFail(err)))
//       )
//     )
//   );

// }