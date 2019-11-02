export declare const SearchAppFixture: {
    filter_artworks: {
        __id: string;
        aggregations: {
            slice: string;
            counts: {
                id: string;
                name: string;
            }[];
        }[];
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
                last: {
                    cursor: string;
                    page: number;
                    isCurrent: boolean;
                };
                previous: any;
            };
            edges: {
                node: {
                    __id: string;
                    image: {
                        aspect_ratio: number;
                        placeholder: string;
                        url: string;
                    };
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
                    _id: string;
                    is_inquireable: boolean;
                    id: string;
                    is_saved: boolean;
                    meta: {
                        description: string;
                    };
                };
            }[];
        };
    };
};
