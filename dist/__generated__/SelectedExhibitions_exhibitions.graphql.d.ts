import { ConcreteFragment } from "relay-runtime";
declare const _SelectedExhibitions_exhibitions$ref: unique symbol;
export declare type SelectedExhibitions_exhibitions$ref = typeof _SelectedExhibitions_exhibitions$ref;
export declare type SelectedExhibitions_exhibitions = ReadonlyArray<{
    readonly partner: ({
        readonly name?: string | null;
    }) | null;
    readonly name: string | null;
    readonly start_at: string | null;
    readonly cover_image: ({
        readonly cropped: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly city: string | null;
    readonly " $refType": SelectedExhibitions_exhibitions$ref;
}>;
declare const node: ConcreteFragment;
export default node;
