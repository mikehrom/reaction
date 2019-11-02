import { ConcreteFragment } from "relay-runtime";
declare const _ArtistMeta_artist$ref: unique symbol;
export declare type ArtistMeta_artist$ref = typeof _ArtistMeta_artist$ref;
export declare type ArtistMeta_artist = {
    readonly id: string;
    readonly name: string | null;
    readonly nationality: string | null;
    readonly birthday: string | null;
    readonly deathday: string | null;
    readonly gender: string | null;
    readonly href: string | null;
    readonly meta: ({
        readonly title: string | null;
        readonly description: string | null;
    }) | null;
    readonly alternate_names: ReadonlyArray<string | null> | null;
    readonly image: ({
        readonly versions: ReadonlyArray<string | null> | null;
        readonly large: string | null;
        readonly square: string | null;
    }) | null;
    readonly counts: ({
        readonly artworks: any | null;
    }) | null;
    readonly blurb: string | null;
    readonly artworks_connection: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly title: string | null;
                readonly date: string | null;
                readonly description: string | null;
                readonly category: string | null;
                readonly price_currency: string | null;
                readonly listPrice: ({
                    readonly __typename: "PriceRange";
                    readonly minPrice: ({
                        readonly major: number;
                    }) | null;
                    readonly maxPrice: ({
                        readonly major: number;
                        readonly currencyCode: string;
                    }) | null;
                } | {
                    readonly __typename: "Money";
                    readonly major: number;
                    readonly currencyCode: string;
                } | {
                    readonly __typename: "%other";
                }) | null;
                readonly availability: string | null;
                readonly href: string | null;
                readonly image: ({
                    readonly small: string | null;
                    readonly large: string | null;
                }) | null;
                readonly partner: ({
                    readonly name: string | null;
                    readonly href: string | null;
                    readonly profile: ({
                        readonly image: ({
                            readonly small: string | null;
                            readonly large: string | null;
                        }) | null;
                    }) | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtistMeta_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
