export declare const ArtworksGridEdges: {
    node: {
        __id: string;
        image: {
            aspect_ratio: number;
            placeholder: string;
            url: string;
        };
        is_biddable: boolean;
        is_acquireable: boolean;
        href: string;
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
        _id: string;
        is_inquireable: boolean;
        id: string;
        is_saved: boolean;
        is_offerable: boolean;
    };
}[];
export declare const ArtworkGridFixture: {
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
            __id: string;
            image: {
                aspect_ratio: number;
                placeholder: string;
                url: string;
            };
            is_biddable: boolean;
            is_acquireable: boolean;
            href: string;
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
            _id: string;
            is_inquireable: boolean;
            id: string;
            is_saved: boolean;
            is_offerable: boolean;
        };
    }[];
};
