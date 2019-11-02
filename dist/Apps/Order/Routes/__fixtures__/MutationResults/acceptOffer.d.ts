export declare const acceptOfferSuccess: {
    commerceBuyerAcceptOffer: {
        orderOrError: {
            order: {
                id: string;
                awaitingResponseFrom: any;
            };
        };
    };
};
export declare const acceptOfferFailed: {
    commerceBuyerAcceptOffer: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
export declare const acceptOfferPaymentFailed: {
    commerceBuyerAcceptOffer: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
export declare const acceptOfferPaymentFailedInsufficientFunds: {
    commerceBuyerAcceptOffer: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: string;
            };
        };
    };
};
export declare const acceptOfferInsufficientInventoryFailure: {
    commerceBuyerAcceptOffer: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: string;
            };
        };
    };
};
