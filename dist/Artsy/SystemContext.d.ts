import React, { SFC } from "react";
import { Environment } from "relay-runtime";
export interface Mediator {
    trigger: (action: string, config?: object) => void;
}
/**
 * Globally accessible SystemContext values for use in Artsy apps
 */
export interface SystemContextProps {
    /** Is the user opening a Reaction page from the mobile app */
    isEigen?: boolean;
    /**
     * Trigger for global fetching indicator
     */
    isFetching?: boolean;
    /**
     * A PubSub hub, which should only be used for communicating with Force.
     */
    mediator?: Mediator;
    /**
     * FIXME: Ask alloy how to pass one-off props like this in from force
     */
    notificationCount?: number;
    /**
     * A configured environment object that can be used for any Relay operations
     * that need an environment object.
     *
     * If none is provided to the `SystemContextProvider` then one is created,
     * using the `user` if available.
     */
    relayEnvironment?: Environment;
    searchQuery?: string;
    /**
     * Toggle for setting global fetch state, typically set in the `RenderStatus.tsx`
     */
    setIsFetching?: (isFetching: boolean) => void;
    /**
     * The currently signed-in user.
     *
     * Unless explicitely set to `null`, this will default to use the `USER_ID`
     * and `USER_ACCESS_TOKEN` environment variables if available.
     */
    user?: User;
}
export declare const SystemContext: React.Context<SystemContextProps>;
/**
 * Creates a new Context.Provider with a user and Relay environment, or defaults
 * if not passed in as props.
 */
export declare const SystemContextProvider: SFC<SystemContextProps>;
export declare const SystemContextConsumer: React.ExoticComponent<React.ConsumerProps<SystemContextProps>>;
/**
 * A HOC utility function for injecting renderProps into a component.
 */
export declare const withSystemContext: (Component: any) => (props: any) => JSX.Element;
/**
 * Custom hook to access SystemContext
 */
export declare const useSystemContext: () => SystemContextProps;
