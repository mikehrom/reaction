export declare const ArtworkActionsFixture: {
    user: {
        type: string;
    };
    artwork: {
        __id: string;
        _id: string;
        id: string;
        is_saved: boolean;
        is_downloadable: boolean;
        is_hangable: boolean;
        href: string;
        artists: {
            name: string;
        }[];
        image: {
            height: number;
            width: number;
            id: string;
            url: string;
        };
        title: string;
        images: {
            url: string;
        }[];
        date: string;
        dimensions: {
            in: string;
            cm: string;
        };
        artworkMeta: {
            share: string;
            description: string;
        };
        sale: {
            is_closed: boolean;
            is_auction: boolean;
        };
        partner: {
            id: string;
        };
    };
};
