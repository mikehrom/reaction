import { ConcreteFragment } from "relay-runtime";
import { ArtworkActions_artwork$ref } from "./ArtworkActions_artwork.graphql";
declare const _ArtworkImageBrowser_artwork$ref: unique symbol;
export declare type ArtworkImageBrowser_artwork$ref = typeof _ArtworkImageBrowser_artwork$ref;
export declare type ArtworkImageBrowser_artwork = {
    readonly image_alt: string | null;
    readonly image: ({
        readonly id: string | null;
    }) | null;
    readonly images: ReadonlyArray<({
        readonly id: string | null;
        readonly uri: string | null;
        readonly placeholder: ({
            readonly url: string | null;
        }) | null;
        readonly aspectRatio: number;
        readonly is_zoomable: boolean | null;
        readonly is_default: boolean | null;
        readonly deepZoom: ({
            readonly Image: ({
                readonly xmlns: string | null;
                readonly Url: string | null;
                readonly Format: string | null;
                readonly TileSize: number | null;
                readonly Overlap: number | null;
                readonly Size: ({
                    readonly Width: number | null;
                    readonly Height: number | null;
                }) | null;
            }) | null;
        }) | null;
    }) | null> | null;
    readonly " $fragmentRefs": ArtworkActions_artwork$ref;
    readonly " $refType": ArtworkImageBrowser_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
