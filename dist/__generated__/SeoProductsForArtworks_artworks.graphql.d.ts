import { ConcreteFragment } from "relay-runtime";
declare const _SeoProductsForArtworks_artworks$ref: unique symbol;
export declare type SeoProductsForArtworks_artworks$ref = typeof _SeoProductsForArtworks_artworks$ref;
export declare type SeoProductsForArtworks_artworks = {
    readonly artworks_connection: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
                readonly availability: string | null;
                readonly category: string | null;
                readonly date: string | null;
                readonly href: string | null;
                readonly is_acquireable: boolean | null;
                readonly is_price_range: boolean | null;
                readonly price: string | null;
                readonly price_currency: string | null;
                readonly title: string | null;
                readonly artists: ReadonlyArray<({
                    readonly name: string | null;
                }) | null> | null;
                readonly image: ({
                    readonly url: string | null;
                }) | null;
                readonly meta: ({
                    readonly description: string | null;
                }) | null;
                readonly partner: ({
                    readonly name: string | null;
                    readonly type: string | null;
                    readonly profile: ({
                        readonly icon: ({
                            readonly url: string | null;
                        }) | null;
                    }) | null;
                    readonly locations: ReadonlyArray<({
                        readonly address: string | null;
                        readonly address_2: string | null;
                        readonly city: string | null;
                        readonly state: string | null;
                        readonly country: string | null;
                        readonly postal_code: string | null;
                        readonly phone: string | null;
                    }) | null> | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": SeoProductsForArtworks_artworks$ref;
};
declare const node: ConcreteFragment;
export default node;
