export declare const rejectOfferSuccess: {
    commerceBuyerRejectOffer: {
        orderOrError: {
            order: {
                id: string;
                awaitingResponseFrom: any;
            };
        };
    };
};
export declare const rejectOfferFailed: {
    commerceBuyerRejectOffer: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
