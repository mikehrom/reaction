import { ConcreteFragment } from "relay-runtime";
import { ArtistShows_artist$ref } from "./ArtistShows_artist.graphql";
declare const _Shows_viewer$ref: unique symbol;
export declare type Shows_viewer$ref = typeof _Shows_viewer$ref;
export declare type Shows_viewer = {
    readonly artist_currentShows: ({
        readonly " $fragmentRefs": ArtistShows_artist$ref;
    }) | null;
    readonly artist_upcomingShows: ({
        readonly " $fragmentRefs": ArtistShows_artist$ref;
    }) | null;
    readonly artist_pastShows: ({
        readonly " $fragmentRefs": ArtistShows_artist$ref;
    }) | null;
    readonly " $refType": Shows_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
