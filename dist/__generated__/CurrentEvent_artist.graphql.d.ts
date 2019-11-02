import { ConcreteFragment } from "relay-runtime";
declare const _CurrentEvent_artist$ref: unique symbol;
export declare type CurrentEvent_artist$ref = typeof _CurrentEvent_artist$ref;
export declare type CurrentEvent_artist = {
    readonly currentEvent: ({
        readonly event: {
            readonly __typename: string;
        };
        readonly image: ({
            readonly resized: ({
                readonly url: string | null;
            }) | null;
        }) | null;
        readonly name: string | null;
        readonly status: string | null;
        readonly details: string | null;
        readonly partner: string | null;
        readonly href: string | null;
    }) | null;
    readonly " $refType": CurrentEvent_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
