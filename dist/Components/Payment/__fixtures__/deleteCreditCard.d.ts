export declare const deletingCreditCardSuccess: {
    deleteCreditCard: {
        creditCardOrError: {
            creditCard: {
                id: string;
            };
        };
    };
};
export declare const deletingCreditCardFailed: {
    deleteCreditCard: {
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
