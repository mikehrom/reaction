export declare const buyerCounterOfferSuccess: {
    commerceBuyerCounterOffer: {
        orderOrError: {
            order: {
                stateExpiresAt: string;
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
                lastOffer: {
                    createdAt: string;
                    fromParticipant: string;
                    buyerTotal: string;
                    buyerTotalCents: number;
                    note: string;
                    taxTotal: string;
                    taxTotalCents: number;
                    shippingTotal: string;
                    shippingTotalCents: number;
                    id: string;
                    amount: string;
                    amountCents: number;
                    currencyCode: string;
                };
                myLastOffer: {
                    id: string;
                    fromParticipant: string;
                    note: any;
                    createdAt: string;
                    buyerTotal: string;
                    buyerTotalCents: number;
                    taxTotal: string;
                    taxTotalCents: number;
                    shippingTotal: string;
                    shippingTotalCents: number;
                    amount: string;
                    amountCents: number;
                    currencyCode: string;
                };
                __typename: string;
                mode: string;
                currencyCode: string;
                totalListPrice: string;
                totalListPriceCents: number;
                itemsTotal: string;
                itemsTotalCents: number;
                awaitingResponseFrom: any;
                offers: {
                    edges: {
                        node: {
                            createdAt: string;
                            fromParticipant: string;
                            buyerTotal: string;
                            buyerTotalCents: number;
                            note: string;
                            taxTotal: string;
                            taxTotalCents: number;
                            shippingTotal: string;
                            shippingTotalCents: number;
                            id: string;
                            amount: string;
                            amountCents: number;
                            currencyCode: string;
                        };
                    }[];
                };
                id: string;
                code: string;
                state: string;
                stateReason: any;
                shippingTotal: any;
                shippingTotalCents: any;
                taxTotal: any;
                taxTotalCents: any;
                buyerTotal: string;
                lastTransactionFailed: boolean;
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
export declare const buyerCounterOfferFailed: {
    commerceBuyerCounterOffer: {
        orderOrError: {
            error: {
                type: string;
                code: string;
                data: any;
            };
        };
    };
};
