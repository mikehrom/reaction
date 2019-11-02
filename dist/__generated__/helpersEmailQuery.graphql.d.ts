import { ConcreteRequest } from "relay-runtime";
export declare type helpersEmailQueryVariables = {
    readonly email: string;
};
export declare type helpersEmailQueryResponse = {
    readonly user: ({
        readonly userAlreadyExists: boolean | null;
    }) | null;
};
export declare type helpersEmailQuery = {
    readonly response: helpersEmailQueryResponse;
    readonly variables: helpersEmailQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
