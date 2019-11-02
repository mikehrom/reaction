export declare const ArtworkImageBrowserFixture: {
    artwork: {
        title: string;
        image_alt: string;
        image_title: string;
        href: string;
        __id: string;
        id: string;
        is_saved: boolean;
        images: {
            id: string;
            url: string;
            placeholder: {
                url: string;
            };
            aspectRatio: number;
            is_zoomable: boolean;
            is_default: boolean;
            deepZoom: {
                Image: {
                    xmlns: string;
                    Url: string;
                    Format: string;
                    TileSize: number;
                    Overlap: number;
                    Size: {
                        Width: number;
                        Height: number;
                    };
                };
            };
        }[];
        _id: string;
        is_downloadable: boolean;
        is_hangable: boolean;
        artists: {
            name: string;
        }[];
        image: {
            height: number;
            width: number;
            id: string;
            url: string;
        };
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
