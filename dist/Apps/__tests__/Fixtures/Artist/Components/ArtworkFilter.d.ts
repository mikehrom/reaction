export declare const ArtworkFilterFixture: {
    id: string;
    __id: string;
    name: string;
    is_followed: boolean;
    counts: {
        for_sale_artworks: number;
        ecommerce_artworks: number;
        auction_artworks: number;
        artworks: number;
        follows: number;
        has_make_offer_artworks: boolean;
    };
    filtered_artworks: {
        __id: string;
        artworks_connection: {
            edges: {
                node: {
                    id: string;
                };
            }[];
        };
        aggregations: {
            slice: string;
            counts: {
                name: string;
                id: string;
                __id: string;
            }[];
        }[];
    };
    grid: {
        __id: string;
        artworks: {
            pageInfo: {
                hasNextPage: boolean;
                endCursor: string;
            };
            pageCursors: {
                around: {
                    cursor: string;
                    page: number;
                    isCurrent: boolean;
                }[];
                first: any;
                last: any;
                previous: any;
            };
            edges: {
                node: {
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    cultural_maker: any;
                    date: string;
                    href: string;
                    id: string;
                    image: {
                        aspect_ratio: number;
                        placeholder: string;
                        url: string;
                    };
                    image_title: string;
                    is_acquireable: boolean;
                    is_biddable: boolean;
                    is_inquireable: boolean;
                    is_offerable: boolean;
                    is_saved: boolean;
                    partner: {
                        href: string;
                        name: string;
                        type: string;
                        __id: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    sale_message: string;
                    title: string;
                    __id: string;
                    _id: string;
                };
            }[];
        };
    };
};
