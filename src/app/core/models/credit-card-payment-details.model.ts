  
export interface CreditCardPaymentDetails {
    id?: number;
    creditCardNumber: string;
    cardHolder: string;
    expirationDate: Date;
    securityCode?: string;
    amount: number;
}