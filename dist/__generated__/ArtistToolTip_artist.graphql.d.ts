import { ConcreteFragment } from "relay-runtime";
declare const _ArtistToolTip_artist$ref: unique symbol;
export declare type ArtistToolTip_artist$ref = typeof _ArtistToolTip_artist$ref;
export declare type ArtistToolTip_artist = {
    readonly name: string | null;
    readonly id: string;
    readonly _id: string;
    readonly formatted_nationality_and_birthday: string | null;
    readonly href: string | null;
    readonly blurb: string | null;
    readonly carousel: ({
        readonly images: ReadonlyArray<({
            readonly resized: ({
                readonly url: string | null;
                readonly width: number | null;
                readonly height: number | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly genes: ReadonlyArray<({
        readonly name: string | null;
    }) | null> | null;
    readonly " $refType": ArtistToolTip_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
