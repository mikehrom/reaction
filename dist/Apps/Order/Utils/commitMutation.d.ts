import React from "react";
import { GraphQLTaggedNode } from "react-relay";
import { OperationBase } from "relay-runtime";
export declare type CommitMutation = <MutationType extends OperationBase>(args: {
    mutation: GraphQLTaggedNode;
    variables: MutationType["variables"];
}) => Promise<MutationType["response"]>;
interface CommitMutationProps {
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
export declare function injectCommitMutation<Props extends CommitMutationProps>(Component: React.ComponentType<Props>): React.ComponentType<Omit<Props, keyof CommitMutationProps>>;
export {};
