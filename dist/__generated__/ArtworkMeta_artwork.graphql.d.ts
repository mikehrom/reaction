import { ConcreteFragment } from "relay-runtime";
import { SeoDataForArtwork_artwork$ref } from "./SeoDataForArtwork_artwork.graphql";
declare const _ArtworkMeta_artwork$ref: unique symbol;
export declare type ArtworkMeta_artwork$ref = typeof _ArtworkMeta_artwork$ref;
export declare type ArtworkMeta_artwork = {
    readonly href: string | null;
    readonly _id: string;
    readonly date: string | null;
    readonly artist_names: string | null;
    readonly sale_message: string | null;
    readonly partner: ({
        readonly name: string | null;
    }) | null;
    readonly image_rights: string | null;
    readonly is_in_auction: boolean | null;
    readonly is_acquireable: boolean | null;
    readonly is_shareable: boolean | null;
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
        readonly long_description: string | null;
    }) | null;
    readonly context: ({
        readonly __typename: "ArtworkContextFair";
        readonly id: string;
        readonly name: string | null;
    } | {
        readonly __typename: "%other";
    }) | null;
    readonly " $fragmentRefs": SeoDataForArtwork_artwork$ref;
    readonly " $refType": ArtworkMeta_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
