export declare const ArtworkFromAuctionPreview: {
    _id: string;
    sale: {
        registrationStatus: any;
        is_preview: boolean;
        is_open: boolean;
        is_live_open: boolean;
        is_closed: boolean;
        is_registration_closed: boolean;
    };
    sale_artwork: {
        increments: {
            cents: number;
            display: string;
        }[];
    };
    myLotStanding: any;
};
export declare const ArtworkFromTimedAuctionRegistrationOpen: {
    _id: string;
    sale: {
        registrationStatus: any;
        is_preview: boolean;
        is_open: boolean;
        is_live_open: boolean;
        is_closed: boolean;
        is_registration_closed: boolean;
    };
    sale_artwork: {
        increments: {
            cents: number;
            display: string;
        }[];
    };
    myLotStanding: any;
};
export declare const ArtworkFromTimedAuctionRegistrationClosed: {
    _id: string;
    sale: {
        registrationStatus: any;
        is_preview: boolean;
        is_open: boolean;
        is_live_open: boolean;
        is_closed: boolean;
        is_registration_closed: boolean;
    };
    sale_artwork: {
        increments: {
            cents: number;
            display: string;
        }[];
    };
    myLotStanding: any;
};
export declare const ArtworkFromLiveAuctionRegistrationOpen: {
    _id: string;
    sale: {
        registrationStatus: any;
        is_preview: boolean;
        is_open: boolean;
        is_live_open: boolean;
        is_closed: boolean;
        is_registration_closed: boolean;
    };
    sale_artwork: {
        increments: {
            cents: number;
            display: string;
        }[];
    };
    myLotStanding: any;
};
export declare const ArtworkFromLiveAuctionRegistrationClosed: {
    _id: string;
    sale: {
        registrationStatus: any;
        is_preview: boolean;
        is_open: boolean;
        is_live_open: boolean;
        is_closed: boolean;
        is_registration_closed: boolean;
    };
    sale_artwork: {
        increments: {
            cents: number;
            display: string;
        }[];
    };
    myLotStanding: any;
};
export declare const ArtworkFromClosedAuction: {
    _id: string;
    sale: {
        registrationStatus: any;
        is_preview: boolean;
        is_open: boolean;
        is_live_open: boolean;
        is_closed: boolean;
        is_registration_closed: boolean;
    };
    sale_artwork: {
        increments: {
            cents: number;
            display: string;
        }[];
    };
    myLotStanding: any;
};
export declare const NotRegisteredToBid: {
    myLotStanding: any;
    sale: {
        registrationStatus: any;
    };
};
export declare const BidderPendingApproval: {
    myLotStanding: any;
    sale: {
        registrationStatus: {
            id: string;
            qualified_for_bidding: boolean;
        };
    };
};
export declare const RegisteredBidder: {
    myLotStanding: any;
    sale: {
        registrationStatus: {
            id: string;
            qualified_for_bidding: boolean;
        };
    };
};
export declare const RegistedBidderWithBids: {
    myLotStanding: {
        most_recent_bid: {
            max_bid: {
                cents: string;
            };
        };
    }[];
    sale: {
        registrationStatus: {
            id: string;
            qualified_for_bidding: boolean;
        };
    };
};
