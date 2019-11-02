import { ConcreteFragment } from "relay-runtime";
import { ArtworkFilterArtworkGrid2_filtered_artworks$ref } from "./ArtworkFilterArtworkGrid2_filtered_artworks.graphql";
declare const _ArtistArtworkFilter_artist$ref: unique symbol;
export declare type ArtistArtworkFilter_artist$ref = typeof _ArtistArtworkFilter_artist$ref;
export declare type ArtistArtworkFilter_artist = {
    readonly is_followed: boolean | null;
    readonly counts: ({
        readonly partner_shows: any | null;
        readonly for_sale_artworks: any | null;
        readonly ecommerce_artworks: any | null;
        readonly auction_artworks: any | null;
        readonly artworks: any | null;
        readonly has_make_offer_artworks: boolean | null;
    }) | null;
    readonly filtered_artworks: ({
        readonly __id: string;
        readonly " $fragmentRefs": ArtworkFilterArtworkGrid2_filtered_artworks$ref;
    }) | null;
    readonly " $refType": ArtistArtworkFilter_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
