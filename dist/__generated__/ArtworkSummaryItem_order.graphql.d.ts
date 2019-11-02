import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSummaryItem_order$ref: unique symbol;
export declare type ArtworkSummaryItem_order$ref = typeof _ArtworkSummaryItem_order$ref;
export declare type ArtworkSummaryItem_order = {
    readonly sellerDetails: ({
        readonly name?: string | null;
    }) | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly artist_names: string | null;
                    readonly title: string | null;
                    readonly date: string | null;
                    readonly shippingOrigin: string | null;
                    readonly image: ({
                        readonly resized_ArtworkSummaryItem: ({
                            readonly url: string | null;
                        }) | null;
                    }) | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtworkSummaryItem_order$ref;
};
declare const node: ConcreteFragment;
export default node;
