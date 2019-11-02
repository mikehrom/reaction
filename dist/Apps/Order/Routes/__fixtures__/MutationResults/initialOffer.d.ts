export declare const initialOfferSuccess: {
    commerceAddInitialOfferToOrder: {
        orderOrError: {
            order: {
                id: string;
                mode: string;
                itemsTotalCents: number;
                totalListPriceCents: number;
                totalListPrice: string;
                myLastOffer: {
                    id: string;
                    amountCents: number;
                    note: any;
                };
                lastOffer: any;
            };
        };
    };
};
export declare const initialOfferFailedCannotOffer: {
    commerceAddInitialOfferToOrder: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
export declare const initialOfferFailedAmountIsInvalid: {
    commerceAddInitialOfferToOrder: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
