import { SystemContextProps } from "Artsy";
import React from "react";
import { GraphQLTaggedNode, ReadyState } from "react-relay";
import { CacheConfig, RerunParam, Variables } from "relay-runtime";
/**
 * A copy of the upstream interface, minus the `environment` field.
 */
interface QueryRendererProps {
    cacheConfig?: CacheConfig;
    query: GraphQLTaggedNode;
    variables: Variables;
    rerunParamExperimental?: RerunParam;
    render(readyState: ReadyState): React.ReactElement<any> | undefined | null;
}
declare type Props = SystemContextProps & QueryRendererProps;
/**
 * This component is, for now, mostly intended as an easy way to render stories, as it combines the Artsy
 * `ContextProvider` component and Relay‘s `QueryRenderer` component.
 *
 * We’ll need to see if it makes sense to use this as an entry point to render component trees from Reaction in Force.
 */
export declare const RootQueryRenderer: React.SFC<Props>;
export {};
