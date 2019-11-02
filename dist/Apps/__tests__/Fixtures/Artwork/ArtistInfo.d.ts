export declare const ArtistInfoFixture: {
    id: string;
    name: string;
    href: string;
    image: {
        cropped: {
            url: string;
        };
    };
    formatted_nationality_and_birthday: string;
    counts: {
        partner_shows: number;
        follows: number;
    };
    exhibition_highlights: {
        partner: {
            __typename: string;
            name: string;
            __id: string;
        };
        name: string;
        start_at: string;
        cover_image: {
            cropped: {
                url: string;
            };
        };
        city: string;
        __id: string;
    }[];
    biography_blurb: {
        text: string;
        credit: any;
    };
    __id: string;
    _id: string;
    collections: string[];
    highlights: {
        partners: {
            edges: {
                node: {
                    categories: {
                        id: string;
                    }[];
                    __id: string;
                };
                __id: string;
            }[];
        };
    };
    auctionResults: {
        edges: {
            node: {
                price_realized: {
                    display: string;
                };
                organization: string;
                sale_date: string;
                __id: string;
            };
        }[];
    };
    is_followed: boolean;
};
