export declare const ArtworkClosedAuction: {
    _id: string;
    partner: {
        _id: string;
        name: string;
    };
    sale_artwork: {
        estimate: string;
    };
    sale: {
        _id: string;
        is_closed: boolean;
        is_with_buyers_premium: any;
    };
};
export declare const ArtworkAuctionPreview: {
    _id: string;
    partner: {
        _id: string;
        name: string;
    };
    sale_artwork: {
        estimate: string;
    };
    sale: {
        _id: string;
        is_closed: boolean;
        is_with_buyers_premium: boolean;
    };
};
export declare const ArtworkNoEstimateNoPremium: {
    _id: string;
    partner: {
        _id: string;
        name: string;
    };
    sale_artwork: {
        estimate: any;
    };
    sale: {
        _id: string;
        is_closed: boolean;
        is_with_buyers_premium: any;
    };
};
export declare const ArtworkWithEstimateNoPremium: {
    _id: string;
    partner: {
        _id: string;
        name: string;
    };
    sale_artwork: {
        estimate: string;
    };
    sale: {
        _id: string;
        is_closed: boolean;
        is_with_buyers_premium: any;
    };
};
export declare const ArtworkWithEstimateAndPremium: {
    _id: string;
    partner: {
        _id: string;
        name: string;
    };
    sale_artwork: {
        estimate: string;
    };
    sale: {
        _id: string;
        is_closed: boolean;
        is_with_buyers_premium: boolean;
    };
};
