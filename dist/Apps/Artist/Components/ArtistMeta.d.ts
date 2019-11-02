/// <reference types="lodash" />
import { ArtistMeta_artist } from "__generated__/ArtistMeta_artist.graphql";
import React, { Component } from "react";
interface Props {
    artist: ArtistMeta_artist;
}
export declare const sellerFromPartner: (partner: {
    readonly name: string;
    readonly href: string;
    readonly profile: {
        readonly image: {
            readonly small: string;
            readonly large: string;
        };
    };
}) => {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    image: {
        "@type": string;
        thumbnailUrl: string;
        url: string;
    };
};
interface ItemWithImage {
    image?: {
        small: string;
        large: string;
    };
}
export declare const imageObjectAttributes: (item: ItemWithImage) => {
    "@type": string;
    thumbnailUrl: string;
    url: string;
};
export declare const offersAttributes: (artist: ArtistMeta_artist) => {
    "@type": string;
    availability: string;
    priceCurrency: string;
    seller: {
        "@context": string;
        "@type": string;
        name: string;
        url: string;
        image: {
            "@type": string;
            thumbnailUrl: string;
            url: string;
        };
    };
    itemOffered: {
        "@type": string;
        additionalType: string;
        productionDate: string;
        name: string;
        url: string;
        image: {
            "@type": string;
            thumbnailUrl: string;
            url: string;
        };
        offers: {
            "@type": string;
            lowPrice: number;
            highPrice: number;
            priceCurrency: string;
            price?: undefined;
            availability?: undefined;
        } | {
            "@type": string;
            price: number;
            priceCurrency: string;
            availability: string;
            lowPrice?: undefined;
            highPrice?: undefined;
        };
        brand: {
            "@type": string;
            name: string;
        };
    };
}[];
export declare const productAttributes: (artist: ArtistMeta_artist, artwork: {
    readonly title: string;
    readonly date: string;
    readonly description: string;
    readonly category: string;
    readonly price_currency: string;
    readonly listPrice: {
        readonly __typename: "PriceRange";
        readonly minPrice: {
            readonly major: number;
        };
        readonly maxPrice: {
            readonly major: number;
            readonly currencyCode: string;
        };
    } | {
        readonly __typename: "Money";
        readonly major: number;
        readonly currencyCode: string;
    } | {
        readonly __typename: "%other";
    };
    readonly availability: string;
    readonly href: string;
    readonly image: {
        readonly small: string;
        readonly large: string;
    };
    readonly partner: {
        readonly name: string;
        readonly href: string;
        readonly profile: {
            readonly image: {
                readonly small: string;
                readonly large: string;
            };
        };
    };
}) => {
    "@type": string;
    additionalType: string;
    productionDate: string;
    name: string;
    url: string;
    image: {
        "@type": string;
        thumbnailUrl: string;
        url: string;
    };
    offers: {
        "@type": string;
        lowPrice: number;
        highPrice: number;
        priceCurrency: string;
        price?: undefined;
        availability?: undefined;
    } | {
        "@type": string;
        price: number;
        priceCurrency: string;
        availability: string;
        lowPrice?: undefined;
        highPrice?: undefined;
    };
    brand: {
        "@type": string;
        name: string;
    };
};
export declare const offerAttributes: (artwork: {
    readonly title: string;
    readonly date: string;
    readonly description: string;
    readonly category: string;
    readonly price_currency: string;
    readonly listPrice: {
        readonly __typename: "PriceRange";
        readonly minPrice: {
            readonly major: number;
        };
        readonly maxPrice: {
            readonly major: number;
            readonly currencyCode: string;
        };
    } | {
        readonly __typename: "Money";
        readonly major: number;
        readonly currencyCode: string;
    } | {
        readonly __typename: "%other";
    };
    readonly availability: string;
    readonly href: string;
    readonly image: {
        readonly small: string;
        readonly large: string;
    };
    readonly partner: {
        readonly name: string;
        readonly href: string;
        readonly profile: {
            readonly image: {
                readonly small: string;
                readonly large: string;
            };
        };
    };
}) => {
    "@type": string;
    lowPrice: number;
    highPrice: number;
    priceCurrency: string;
    price?: undefined;
    availability?: undefined;
} | {
    "@type": string;
    price: number;
    priceCurrency: string;
    availability: string;
    lowPrice?: undefined;
    highPrice?: undefined;
};
export declare const structuredDataAttributes: (artist: ArtistMeta_artist) => import("lodash").Dictionary<string | {
    "@type": string;
    availability: string;
    priceCurrency: string;
    seller: {
        "@context": string;
        "@type": string;
        name: string;
        url: string;
        image: {
            "@type": string;
            thumbnailUrl: string;
            url: string;
        };
    };
    itemOffered: {
        "@type": string;
        additionalType: string;
        productionDate: string;
        name: string;
        url: string;
        image: {
            "@type": string;
            thumbnailUrl: string;
            url: string;
        };
        offers: {
            "@type": string;
            lowPrice: number;
            highPrice: number;
            priceCurrency: string;
            price?: undefined;
            availability?: undefined;
        } | {
            "@type": string;
            price: number;
            priceCurrency: string;
            availability: string;
            lowPrice?: undefined;
            highPrice?: undefined;
        };
        brand: {
            "@type": string;
            name: string;
        };
    };
}[] | {
    "@type": string;
    name: string;
}>;
export declare class ArtistMeta extends Component<Props> {
    renderImageMetaTags(): JSX.Element;
    maybeRenderNoIndex(): JSX.Element;
    renderStructuredData(): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtistMetaFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "artist">> & import("react-relay").ComponentRef>;
export {};
