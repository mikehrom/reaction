import { ConcreteFragment } from "relay-runtime";
import { BidForm_me$ref } from "./BidForm_me.graphql";
declare const _ConfirmBid_me$ref: unique symbol;
export declare type ConfirmBid_me$ref = typeof _ConfirmBid_me$ref;
export declare type ConfirmBid_me = {
    readonly id: string;
    readonly hasQualifiedCreditCards: boolean | null;
    readonly " $fragmentRefs": BidForm_me$ref;
    readonly " $refType": ConfirmBid_me$ref;
};
declare const node: ConcreteFragment;
export default node;
