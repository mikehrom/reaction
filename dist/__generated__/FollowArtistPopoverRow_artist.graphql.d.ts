import { ConcreteFragment } from "relay-runtime";
declare const _FollowArtistPopoverRow_artist$ref: unique symbol;
export declare type FollowArtistPopoverRow_artist$ref = typeof _FollowArtistPopoverRow_artist$ref;
export declare type FollowArtistPopoverRow_artist = {
    readonly _id: string;
    readonly name: string | null;
    readonly image: ({
        readonly cropped: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly " $refType": FollowArtistPopoverRow_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
