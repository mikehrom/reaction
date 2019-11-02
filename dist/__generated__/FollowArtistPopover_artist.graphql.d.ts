import { ConcreteFragment } from "relay-runtime";
import { FollowArtistPopoverRow_artist$ref } from "./FollowArtistPopoverRow_artist.graphql";
declare const _FollowArtistPopover_artist$ref: unique symbol;
export declare type FollowArtistPopover_artist$ref = typeof _FollowArtistPopover_artist$ref;
export declare type FollowArtistPopover_artist = {
    readonly related: ({
        readonly suggested: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly __id: string;
                    readonly _id: string;
                    readonly " $fragmentRefs": FollowArtistPopoverRow_artist$ref;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly " $refType": FollowArtistPopover_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
