export declare const creatingCreditCardSuccess: {
    createCreditCard: {
        creditCardOrError: {
            creditCard: {
                id: string;
                name: string;
                street1: string;
                street2: string;
                city: string;
                state: string;
                country: string;
                postal_code: string;
                expiration_month: number;
                expiration_year: number;
                last_digits: string;
                brand: string;
            };
        };
    };
};
export declare const creatingCreditCardFailed: {
    createCreditCard: {
        creditCardOrError: {
            mutationError: {
                type: string;
                message: string;
                detail: string;
                error: any;
            };
        };
    };
};
