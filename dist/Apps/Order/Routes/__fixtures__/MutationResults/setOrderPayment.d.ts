export declare const settingOrderPaymentSuccess: {
    commerceSetPayment: {
        orderOrError: {
            order: {
                __typename: string;
                id: string;
                creditCard: {
                    id: string;
                    name: string;
                    street1: string;
                    street2: string;
                    city: string;
                    state: string;
                    country: string;
                    postal_code: string;
                };
            };
        };
    };
};
export declare const settingOrderPaymentFailed: {
    commerceSetPayment: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: string;
            };
        };
    };
};
