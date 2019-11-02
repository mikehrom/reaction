import { IMocks } from "graphql-tools/dist/Interfaces";
import { RelayNetwork } from "relay-runtime";
/**
 * @deprecated use createMockNetworkLayer2
 * @param mockResolvers
 */
export declare const createMockNetworkLayer: (mockResolvers: IMocks) => RelayNetwork;
export declare const createMockNetworkLayer2: ({ mockData, mockMutationResults, }: {
    mockData?: object;
    mockMutationResults?: object;
}) => RelayNetwork;
/**
 * Here we create a mock for the `fetchQuery` graphql helper which executes
 * a query. The mock is injected with fake results.
 * @param param0
 */
export declare const createMockFetchQuery: ({ mockData, mockMutationResults, }: {
    mockData?: object;
    mockMutationResults?: object;
}) => any;
