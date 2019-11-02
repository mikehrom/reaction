export declare const mockResolver: (orderDetails?: any) => {
    Query: () => {
        me: {
            name: string;
        };
    };
    CommerceOrder: (_: any, { id, ...others }: {
        [x: string]: any;
        id: any;
    }) => any;
    CommerceBuyOrder: (_: any, { id, ...others }: {
        [x: string]: any;
        id: any;
    }) => any;
    CommerceOfferOrder: (_: any, { id, ...others }: {
        [x: string]: any;
        id: any;
    }) => any;
};
export declare const UntouchedOrder: {
    id: string;
    code: string;
    state: string;
    stateReason: any;
    stateExpiresAt: string;
    itemsTotal: string;
    totalListPrice: string;
    totalListPriceCents: number;
    shippingTotal: any;
    shippingTotalCents: any;
    taxTotal: any;
    taxTotalCents: any;
    creditCard: any;
    buyerTotal: string;
    requestedFulfillment: any;
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
export declare const UntouchedBuyOrder: {
    __typename: string;
    mode: string;
    id: string;
    code: string;
    state: string;
    stateReason: any;
    stateExpiresAt: string;
    itemsTotal: string;
    totalListPrice: string;
    totalListPriceCents: number;
    shippingTotal: any;
    shippingTotalCents: any;
    taxTotal: any;
    taxTotalCents: any;
    creditCard: any;
    buyerTotal: string;
    requestedFulfillment: any;
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
export declare const TaxTotals: {
    taxTotal: string;
    taxTotalCents: number;
};
export declare const ShippingTotals: {
    shippingTotal: string;
    shippingTotalCents: number;
};
export declare const OfferWithTotals: {
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
export declare const UntouchedOfferOrder: {
    __typename: string;
    mode: string;
    currencyCode: string;
    totalListPrice: string;
    totalListPriceCents: number;
    itemsTotal: string;
    itemsTotalCents: number;
    lastOffer: any;
    awaitingResponseFrom: any;
    myLastOffer: any;
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
    stateExpiresAt: string;
    shippingTotal: any;
    shippingTotalCents: any;
    taxTotal: any;
    taxTotalCents: any;
    creditCard: any;
    buyerTotal: string;
    requestedFulfillment: any;
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
export declare const OfferOrderWithOffers: {
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
    stateExpiresAt: string;
    shippingTotal: any;
    shippingTotalCents: any;
    taxTotal: any;
    taxTotalCents: any;
    creditCard: any;
    buyerTotal: string;
    requestedFulfillment: any;
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
export declare const OfferOrderWithOffersAndNote: {
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
        note: string;
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
    stateExpiresAt: string;
    shippingTotal: any;
    shippingTotalCents: any;
    taxTotal: any;
    taxTotalCents: any;
    creditCard: any;
    buyerTotal: string;
    requestedFulfillment: any;
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
export declare const ShippingDetails: {
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
};
export declare const PaymentDetails: {
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
};
export declare const BuyOrderWithShippingDetails: {
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
    state: string;
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
export declare const OfferOrderWithShippingDetails: {
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
    stateExpiresAt: string;
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
export declare const OfferOrderWithShippingDetailsAndNote: {
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
        note: string;
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
    stateExpiresAt: string;
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
export declare const BuyOrderPickup: {
    buyerPhoneNumber: string;
    requestedFulfillment: {
        __typename: string;
        fulfillmentType: string;
    };
    __typename: string;
    mode: string;
    id: string;
    code: string;
    state: string;
    stateReason: any;
    stateExpiresAt: string;
    itemsTotal: string;
    totalListPrice: string;
    totalListPriceCents: number;
    shippingTotal: any;
    shippingTotalCents: any;
    taxTotal: any;
    taxTotalCents: any;
    creditCard: any;
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
export declare const OfferOrderPickup: {
    buyerPhoneNumber: string;
    requestedFulfillment: {
        __typename: string;
        fulfillmentType: string;
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
    stateExpiresAt: string;
    shippingTotal: any;
    shippingTotalCents: any;
    taxTotal: any;
    taxTotalCents: any;
    creditCard: any;
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
export declare const Buyer: {
    __typename: string;
    id: string;
};
export declare const Seller: {
    __typename: string;
    id: string;
};
export declare const Offers: {
    node: {
        id: string;
        currencyCode: string;
        fromParticipant: string;
        amount: string;
        createdAt: string;
    };
}[];
