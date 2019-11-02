export declare const submitOrderWithFailure: {
    commerceSubmitOrder: {
        orderOrError: {
            __typename: string;
            error: {
                type: string;
                code: string;
                data: string;
            };
        };
    };
};
export declare const submitOrderWithFailureCardDeclined: {
    commerceSubmitOrder: {
        orderOrError: {
            __typename: string;
            error: {
                type: string;
                code: string;
                data: string;
            };
        };
    };
};
export declare const submitOrderWithFailureInsufficientFunds: {
    commerceSubmitOrder: {
        orderOrError: {
            __typename: string;
            error: {
                type: string;
                code: string;
                data: string;
            };
        };
    };
};
export declare const submitOrderWithVersionMismatchFailure: {
    commerceSubmitOrder: {
        orderOrError: {
            __typename: string;
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
export declare const submitOrderWithNoInventoryFailure: {
    commerceSubmitOrder: {
        orderOrError: {
            __typename: string;
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
export declare const submitOrderWithActionRequired: {
    commerceSubmitOrder: {
        orderOrError: {
            __typename: string;
            actionData: {
                clientSecret: string;
            };
        };
    };
};
export declare const submitOrderSuccess: {
    commerceSubmitOrder: {
        orderOrError: {
            __typename: string;
            order: {
                state: string;
                creditCard: {
                    name: string;
                    street1: string;
                    street2: any;
                    city: string;
                    state: string;
                    country: string;
                    postal_code: string;
                    brand: string;
                    last_digits: string;
                    expiration_month: number;
                    expiration_year: number;
                };
                buyerPhoneNumber: string;
                requestedFulfillment: {
                    __typename: string;
                    fulfillmentType: string;
                    name: string;
                    addressLine1: string;
                    addressLine2: string;
                    city: string;
                    postalCode: string;
                    region: string;
                    country: string;
                    phoneNumber: string;
                };
                __typename: string;
                mode: string;
                id: string;
                code: string;
                stateReason: any;
                stateExpiresAt: string;
                itemsTotal: string;
                totalListPrice: string;
                totalListPriceCents: number;
                shippingTotal: any;
                shippingTotalCents: any;
                taxTotal: any;
                taxTotalCents: any;
                buyerTotal: string;
                lastTransactionFailed: boolean;
                currencyCode: string;
                lineItems: {
                    edges: {
                        node: {
                            artwork: {
                                id: string;
                                _id: string;
                                pickup_available: boolean;
                                artist_names: string;
                                title: string;
                                date: string;
                                shippingOrigin: string;
                                medium: string;
                                onlyShipsDomestically: boolean;
                                shippingCountry: string;
                                is_acquireable: boolean;
                                is_offerable: boolean;
                                dimensions: {
                                    in: string;
                                    cm: string;
                                };
                                edition_sets: any[];
                                artists: {
                                    id: string;
                                }[];
                                attribution_class: any;
                                image: {
                                    resized: {
                                        url: string;
                                    };
                                    resized_ArtworkSummaryItem: {
                                        url: string;
                                    };
                                };
                            };
                            fulfillments: {
                                edges: {
                                    node: {
                                        courier: string;
                                        trackingId: string;
                                        estimatedDelivery: string;
                                    };
                                }[];
                            };
                            editionSetId: any;
                        };
                    }[];
                };
                sellerDetails: {
                    __typename: string;
                    name: string;
                    locations: {
                        city: string;
                        state: string;
                        country: string;
                    }[];
                };
            };
        };
    };
};
export declare const submitOrderWithMissingInfo: {
    commerceSubmitOrder: {
        orderOrError: {
            __typename: string;
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
