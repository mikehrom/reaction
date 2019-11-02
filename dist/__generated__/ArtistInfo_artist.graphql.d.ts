import { ConcreteFragment } from "relay-runtime";
import { ArtistBio_bio$ref } from "./ArtistBio_bio.graphql";
import { ArtistMarketInsights_artist$ref } from "./ArtistMarketInsights_artist.graphql";
import { FollowArtistButton_artist$ref } from "./FollowArtistButton_artist.graphql";
import { SelectedExhibitions_exhibitions$ref } from "./SelectedExhibitions_exhibitions.graphql";
declare const _ArtistInfo_artist$ref: unique symbol;
export declare type ArtistInfo_artist$ref = typeof _ArtistInfo_artist$ref;
export declare type ArtistInfo_artist = {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null;
    readonly href: string | null;
    readonly image: ({
        readonly cropped: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly formatted_nationality_and_birthday: string | null;
    readonly counts: ({
        readonly partner_shows: any | null;
    }) | null;
    readonly exhibition_highlights: ReadonlyArray<({
        readonly " $fragmentRefs": SelectedExhibitions_exhibitions$ref;
    }) | null> | null;
    readonly collections: ReadonlyArray<string | null> | null;
    readonly highlights: ({
        readonly partners: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly __typename: string;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly auctionResults: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __typename: string;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly biography_blurb: ({
        readonly text: string | null;
    }) | null;
    readonly " $fragmentRefs": ArtistBio_bio$ref & ArtistMarketInsights_artist$ref & FollowArtistButton_artist$ref;
    readonly " $refType": ArtistInfo_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
