export declare const ArtworkContextAuctionFixture: {
    sales: any[];
    artwork: {
        artist: {
            name: string;
            href: string;
        };
        sale: {
            href: string;
            is_closed: boolean;
            __id: string;
            artworksConnection: {
                edges: {
                    node: {
                        __id: string;
                        image: {
                            aspect_ratio: number;
                            placeholder: string;
                            url: string;
                        };
                        is_biddable: boolean;
                        sale: {
                            is_preview: boolean;
                            __id: string;
                            is_auction: boolean;
                            is_live_open: boolean;
                            is_open: boolean;
                            is_closed: boolean;
                            display_timely_at: string;
                        };
                        is_acquireable: boolean;
                        href: string;
                        title: string;
                        date: string;
                        sale_message: string;
                        cultural_maker: any;
                        artists: {
                            __id: string;
                            href: string;
                            name: string;
                        }[];
                        collecting_institution: any;
                        partner: {
                            name: string;
                            href: string;
                            __id: string;
                            type: string;
                        };
                        sale_artwork: {
                            highest_bid: {
                                display: any;
                                __id: any;
                            };
                            opening_bid: {
                                display: string;
                            };
                            __id: string;
                            counts: {
                                bidder_positions: number;
                            };
                        };
                        _id: string;
                        is_inquireable: boolean;
                        id: string;
                        is_saved: boolean;
                    };
                }[];
            };
        };
        __id: string;
        layers: {
            name: string;
            id: string;
            __id: string;
        }[];
        layer: {
            name: string;
            artworksConnection: {
                edges: {
                    node: {
                        __id: string;
                        image: {
                            aspect_ratio: number;
                            placeholder: string;
                            url: string;
                        };
                        _id: string;
                        is_biddable: boolean;
                        sale: any;
                        is_acquireable: boolean;
                        href: string;
                        title: string;
                        date: string;
                        sale_message: string;
                        cultural_maker: any;
                        artists: {
                            __id: string;
                            href: string;
                            name: string;
                        }[];
                        collecting_institution: any;
                        partner: {
                            name: string;
                            href: string;
                            __id: string;
                            type: string;
                        };
                        sale_artwork: any;
                        is_inquireable: boolean;
                        id: string;
                        is_saved: boolean;
                    };
                }[];
            };
            __id: string;
        };
    };
};
