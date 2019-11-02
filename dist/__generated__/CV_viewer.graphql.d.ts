import { ConcreteFragment } from "relay-runtime";
import { CVItem_artist$ref } from "./CVItem_artist.graphql";
declare const _CV_viewer$ref: unique symbol;
export declare type CV_viewer$ref = typeof _CV_viewer$ref;
export declare type CV_viewer = {
    readonly artist_soloShows: ({
        readonly " $fragmentRefs": CVItem_artist$ref;
    }) | null;
    readonly artist_groupShows: ({
        readonly " $fragmentRefs": CVItem_artist$ref;
    }) | null;
    readonly artist_fairBooths: ({
        readonly " $fragmentRefs": CVItem_artist$ref;
    }) | null;
    readonly " $refType": CV_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
