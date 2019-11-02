import { ConcreteFragment } from "relay-runtime";
declare const _SeoDataForArtwork_artwork$ref: unique symbol;
export declare type SeoDataForArtwork_artwork$ref = typeof _SeoDataForArtwork_artwork$ref;
export declare type SeoDataForArtwork_artwork = {
    readonly href: string | null;
    readonly date: string | null;
    readonly is_price_hidden: boolean | null;
    readonly is_price_range: boolean | null;
    readonly price: string | null;
    readonly price_currency: string | null;
    readonly sale_message: string | null;
    readonly meta_image: ({
        readonly resized: ({
            readonly width: number | null;
            readonly height: number | null;
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly meta: ({
        readonly title: string | null;
        readonly description: string | null;
    }) | null;
    readonly partner: ({
        readonly name: string | null;
        readonly type: string | null;
        readonly profile: ({
            readonly image: ({
                readonly resized: ({
                    readonly url: string | null;
                }) | null;
            }) | null;
        }) | null;
    }) | null;
    readonly artist_names: string | null;
    readonly availability: string | null;
    readonly category: string | null;
    readonly dimensions: ({
        readonly in: string | null;
    }) | null;
    readonly " $refType": SeoDataForArtwork_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
