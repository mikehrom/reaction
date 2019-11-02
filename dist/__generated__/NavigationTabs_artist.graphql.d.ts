import { ConcreteFragment } from "relay-runtime";
declare const _NavigationTabs_artist$ref: unique symbol;
export declare type NavigationTabs_artist$ref = typeof _NavigationTabs_artist$ref;
export declare type NavigationTabs_artist = {
    readonly id: string;
    readonly statuses: ({
        readonly shows: boolean | null;
        readonly articles: boolean | null;
        readonly cv: boolean | null;
        readonly auction_lots: boolean | null;
    }) | null;
    readonly " $refType": NavigationTabs_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
