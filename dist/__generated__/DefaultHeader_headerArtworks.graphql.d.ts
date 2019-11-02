import { ConcreteFragment } from "relay-runtime";
declare const _DefaultHeader_headerArtworks$ref: unique symbol;
export declare type DefaultHeader_headerArtworks$ref = typeof _DefaultHeader_headerArtworks$ref;
export declare type DefaultHeader_headerArtworks = {
    readonly hits: ReadonlyArray<({
        readonly href: string | null;
        readonly id: string;
        readonly image: ({
            readonly small: ({
                readonly url: string | null;
                readonly width: number | null;
                readonly height: number | null;
            }) | null;
            readonly large: ({
                readonly url: string | null;
                readonly width: number | null;
                readonly height: number | null;
            }) | null;
        }) | null;
    }) | null> | null;
    readonly " $refType": DefaultHeader_headerArtworks$ref;
};
declare const node: ConcreteFragment;
export default node;
