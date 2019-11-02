import { ConcreteRequest } from "relay-runtime";
import { UserSettingsPayments_me$ref } from "./UserSettingsPayments_me.graphql";
export declare type UserSettingsPaymentsQueryVariables = {};
export declare type UserSettingsPaymentsQueryResponse = {
    readonly me: ({
        readonly " $fragmentRefs": UserSettingsPayments_me$ref;
    }) | null;
};
export declare type UserSettingsPaymentsQuery = {
    readonly response: UserSettingsPaymentsQueryResponse;
    readonly variables: UserSettingsPaymentsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
