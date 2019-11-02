export declare const ClosedAuctionArtwork: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: string;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
export declare const AuctionPreview: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: any;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
export declare const AuctionPreviewNoStartingBid: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: any;
        reserve_status: string;
        current_bid: any;
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
export declare const OpenAuctionNoReserveNoBids: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: any;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
export declare const OpenAuctionNoReserveWithBids: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: any;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
export declare const OpenAuctionReserveNoBids: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: string;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
export declare const OpenAuctionReserveNotMetWithBids: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: string;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
export declare const OpenAuctionReserveMetWithBids: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: string;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
export declare const OpenAuctionReserveNotMetIncreasingOwnBid: {
    myLotStanding: {
        most_recent_bid: {
            is_winning: boolean;
            max_bid: {
                display: string;
            };
        };
        active_bid: {
            is_winning: boolean;
        };
    }[];
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: string;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
};
export declare const OpenAuctionReserveMetWithMyWinningBid: {
    myLotStanding: {
        most_recent_bid: {
            is_winning: boolean;
            max_bid: {
                display: string;
            };
        };
        active_bid: {
            is_winning: boolean;
        };
    }[];
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: string;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
};
export declare const OpenAuctionReserveMetWithMyLosingBid: {
    myLotStanding: {
        most_recent_bid: {
            is_winning: boolean;
            max_bid: {
                display: string;
            };
        };
        active_bid: any;
    }[];
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: string;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
};
export declare const LiveAuctionInProgeress: {
    _id: string;
    sale: {
        is_closed: boolean;
        is_live_open: boolean;
    };
    sale_artwork: {
        is_with_reserve: boolean;
        reserve_message: any;
        reserve_status: string;
        current_bid: {
            display: string;
        };
        counts: {
            bidder_positions: number;
        };
    };
    myLotStanding: any;
};
