import "isomorphic-fetch";
import "regenerator-runtime/runtime";
import RelayClientSSR from "react-relay-network-modern-ssr/node8/client";
import RelayServerSSR from "react-relay-network-modern-ssr/node8/server";
import { Environment, RelayNetwork } from "relay-runtime";
interface Config {
    cache?: object;
    user?: User;
    checkStatus?: boolean;
    relayNetwork?: RelayNetwork;
    userAgent?: string;
}
export interface RelaySSREnvironment extends Environment {
    relaySSRMiddleware: RelayClientSSR | RelayServerSSR;
    toggleFetching?: (isFetching: any) => void;
}
export declare function createRelaySSREnvironment(config?: Config): RelaySSREnvironment;
/**
 * During the client-side rehydration phase take SSR cache and add to Relay's
 * QueryResponseCache, which is used inside of cacheMiddleware.
 *
 * @param cache RelayQueryResponseCache
 */
export declare function hydrateCacheFromSSR(queryResponseCache: any): void;
export {};
