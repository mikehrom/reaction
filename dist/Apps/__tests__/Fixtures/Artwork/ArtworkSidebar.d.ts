export declare const ArtworkSidebarFixture: {
    id: string;
    is_biddable: boolean;
    is_in_auction: boolean;
    is_for_sale: boolean;
    is_inquireable: boolean;
    sale_message: string;
    partner: {
        __id: string;
        name: string;
        href: string;
        locations: any[];
    };
    sale_artwork: any;
    sale: any;
    myLotStanding: any;
    artists: {
        __id: string;
        id: string;
        name: string;
        href: string;
        is_followed: boolean;
        counts: {
            follows: number;
        };
        is_consignable: boolean;
    }[];
    title: string;
    date: string;
    medium: string;
    edition_sets: {
        __id: string;
        dimensions: {
            in: string;
            cm: string;
        };
        edition_of: string;
    }[];
    dimensions: {
        in: string;
        cm: string;
    };
    edition_of: string;
    attribution_class: {
        short_description: string;
    };
};
export declare const AuctionArtworkSidebarFixture: {
    is_biddable: boolean;
    is_in_auction: boolean;
    is_for_sale: boolean;
    is_inquireable: boolean;
    sale_message: string;
    partner: {
        __id: string;
        name: string;
        href: string;
        locations: any[];
    };
    sale_artwork: {
        lot_label: string;
        estimate: string;
        is_with_reserve: boolean;
        reserve_message: any;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
        increments: {
            display: string;
        }[];
    };
    sale: {
        registrationStatus: any;
        is_preview: boolean;
        is_open: boolean;
        is_live_open: boolean;
        is_closed: boolean;
        is_registration_closed: boolean;
        is_with_buyers_premium: boolean;
    };
    myLotStanding: any;
    artists: {
        __id: string;
        id: string;
        name: string;
        href: string;
        is_followed: boolean;
        counts: {
            follows: number;
        };
        is_consignable: boolean;
    }[];
    title: string;
    date: string;
    medium: string;
    edition_sets: {
        __id: string;
        dimensions: {
            in: string;
            cm: string;
        };
        edition_of: string;
    }[];
    dimensions: {
        in: string;
        cm: string;
    };
    edition_of: string;
    attribution_class: any;
};
