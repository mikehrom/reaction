import { ConcreteFragment } from "relay-runtime";
import { ArtworkFilterArtworkGrid2_filtered_artworks$ref } from "./ArtworkFilterArtworkGrid2_filtered_artworks.graphql";
declare const _ArtworkFilter_viewer$ref: unique symbol;
export declare type ArtworkFilter_viewer$ref = typeof _ArtworkFilter_viewer$ref;
export declare type ArtworkFilter_viewer = {
    readonly filtered_artworks: ({
        readonly __id: string;
        readonly " $fragmentRefs": ArtworkFilterArtworkGrid2_filtered_artworks$ref;
    }) | null;
    readonly " $refType": ArtworkFilter_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
