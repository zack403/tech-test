  
export interface CreditCardPaymentDetails {
    creditCardNumber: string;
    cardHolder: string;
    expirationDate: Date;
    securityCode?: string;
    amount: Date;
}