import { ConcreteRequest } from "relay-runtime";
import { Register_me$ref } from "./Register_me.graphql";
import { Register_sale$ref } from "./Register_sale.graphql";
export declare type routes_RegisterQueryVariables = {
    readonly saleID: string;
};
export declare type routes_RegisterQueryResponse = {
    readonly sale: ({
        readonly id: string;
        readonly is_auction: boolean | null;
        readonly is_registration_closed: boolean | null;
        readonly is_preview: boolean | null;
        readonly is_open: boolean | null;
        readonly registrationStatus: ({
            readonly qualified_for_bidding: boolean | null;
        }) | null;
        readonly " $fragmentRefs": Register_sale$ref;
    }) | null;
    readonly me: ({
        readonly has_qualified_credit_cards: boolean | null;
        readonly " $fragmentRefs": Register_me$ref;
    }) | null;
};
export declare type routes_RegisterQuery = {
    readonly response: routes_RegisterQueryResponse;
    readonly variables: routes_RegisterQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
