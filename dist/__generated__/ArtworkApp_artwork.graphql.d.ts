import { ConcreteFragment } from "relay-runtime";
import { ArtistInfo_artist$ref } from "./ArtistInfo_artist.graphql";
import { ArtworkBanner_artwork$ref } from "./ArtworkBanner_artwork.graphql";
import { ArtworkDetails_artwork$ref } from "./ArtworkDetails_artwork.graphql";
import { ArtworkImageBrowser_artwork$ref } from "./ArtworkImageBrowser_artwork.graphql";
import { ArtworkMeta_artwork$ref } from "./ArtworkMeta_artwork.graphql";
import { ArtworkRelatedArtists_artwork$ref } from "./ArtworkRelatedArtists_artwork.graphql";
import { ArtworkSidebar_artwork$ref } from "./ArtworkSidebar_artwork.graphql";
import { OtherWorks_artwork$ref } from "./OtherWorks_artwork.graphql";
import { PricingContext_artwork$ref } from "./PricingContext_artwork.graphql";
declare const _ArtworkApp_artwork$ref: unique symbol;
export declare type ArtworkApp_artwork$ref = typeof _ArtworkApp_artwork$ref;
export declare type ArtworkApp_artwork = {
    readonly id: string;
    readonly _id: string;
    readonly is_acquireable: boolean | null;
    readonly is_offerable: boolean | null;
    readonly availability: string | null;
    readonly price: string | null;
    readonly is_in_auction: boolean | null;
    readonly artists: ReadonlyArray<({
        readonly id: string;
        readonly " $fragmentRefs": ArtistInfo_artist$ref;
    }) | null> | null;
    readonly artist: ({
        readonly " $fragmentRefs": ArtistInfo_artist$ref;
    }) | null;
    readonly " $fragmentRefs": ArtworkRelatedArtists_artwork$ref & ArtworkMeta_artwork$ref & ArtworkBanner_artwork$ref & ArtworkSidebar_artwork$ref & ArtworkDetails_artwork$ref & ArtworkImageBrowser_artwork$ref & OtherWorks_artwork$ref & PricingContext_artwork$ref;
    readonly " $refType": ArtworkApp_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
