export declare const OrderWithSuccess: {
    commerceCreateOrderWithArtwork: {
        orderOrError: {
            __typename: string;
            order: {
                id: string;
                mode: string;
            };
        };
    };
};
export declare const OrderWithFailure: {
    commerceCreateOrderWithArtwork: {
        orderOrError: {
            __typename: string;
            error: {
                type: string;
                code: string;
            };
        };
    };
};
export declare const OfferOrderWithSuccess: {
    commerceCreateOfferOrderWithArtwork: {
        orderOrError: {
            __typename: string;
            order: {
                id: string;
                mode: string;
            };
        };
    };
};
export declare const OfferOrderWithFailure: {
    commerceCreateOfferOrderWithArtwork: {
        orderOrError: {
            __typename: string;
            error: {
                type: string;
                code: string;
            };
        };
    };
};
