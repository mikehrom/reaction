export declare const ArtworkFilterFixture: {
    viewer: {
        filtered_artworks: {
            __id: string;
            aggregations: any[];
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
                        id: string;
                        href: string;
                        image: {
                            aspect_ratio: number;
                            __id: string;
                            placeholder: string;
                            url: string;
                        };
                        _id: string;
                        title: string;
                        image_title: string;
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
                        sale: any;
                        sale_artwork: any;
                        is_inquireable: boolean;
                        is_saved: boolean;
                        is_biddable: boolean;
                        is_acquireable: boolean;
                        is_offerable: boolean;
                    };
                }[];
            };
        };
    };
};
