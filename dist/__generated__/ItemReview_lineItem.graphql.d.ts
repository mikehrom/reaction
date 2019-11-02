import { ConcreteFragment } from "relay-runtime";
declare const _ItemReview_lineItem$ref: unique symbol;
export declare type ItemReview_lineItem$ref = typeof _ItemReview_lineItem$ref;
export declare type ItemReview_lineItem = {
    readonly artwork: ({
        readonly artist_names: string | null;
        readonly title: string | null;
        readonly date: string | null;
        readonly medium: string | null;
        readonly dimensions: ({
            readonly in: string | null;
            readonly cm: string | null;
        }) | null;
        readonly attribution_class: ({
            readonly shortDescription: string | null;
        }) | null;
        readonly image: ({
            readonly resized: ({
                readonly url: string | null;
            }) | null;
        }) | null;
        readonly edition_sets: ReadonlyArray<({
            readonly id: string;
            readonly dimensions: ({
                readonly in: string | null;
                readonly cm: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly editionSetId: string | null;
    readonly " $refType": ItemReview_lineItem$ref;
};
declare const node: ConcreteFragment;
export default node;
