import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkDetailsArticles_artwork$ref: unique symbol;
export declare type ArtworkDetailsArticles_artwork$ref = typeof _ArtworkDetailsArticles_artwork$ref;
export declare type ArtworkDetailsArticles_artwork = {
    readonly articles: ReadonlyArray<({
        readonly author: ({
            readonly name: string | null;
        }) | null;
        readonly href: string | null;
        readonly published_at: string | null;
        readonly thumbnail_image: ({
            readonly resized: ({
                readonly url: string | null;
            }) | null;
        }) | null;
        readonly thumbnail_title: string | null;
    }) | null> | null;
    readonly " $refType": ArtworkDetailsArticles_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
