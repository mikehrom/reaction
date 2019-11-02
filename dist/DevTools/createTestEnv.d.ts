/// <reference types="jest" />
import React, { ReactElement } from "react";
import { GraphQLTaggedNode } from "react-relay";
import { Breakpoint } from "Utils/Responsive";
import { RootTestPage } from "./RootTestPage";
declare class Mutations<MutationNames extends string> {
    /**
     * resolvers is an object which maps mutation names to jest.Mock functions
     * Use this if you want to intercept resolution on the fly.
     *
     * e.g. mutations.resolvers.createCreditCard.mockImplementationOnce(...)
     */
    resolvers: Record<MutationNames, jest.Mock>;
    constructor(
    /**
     * resolvers is an object which maps mutation names to jest.Mock functions
     * Use this if you want to intercept resolution on the fly.
     *
     * e.g. mutations.resolvers.createCreditCard.mockImplementationOnce(...)
     */
    resolvers: Record<MutationNames, jest.Mock>);
    /**
     * useResultsOnce
     * @param muationResults an object which should look like the json returned by
     * metaphysics after executing a mutation
     */
    useResultsOnce: (mutationResults: Partial<Record<MutationNames, any>>) => void;
    mockNetworkFailureOnce: () => void;
    readonly lastFetchVariables: any;
    readonly mockFetch: jest.Mock<any, any>;
}
declare class Routes {
    mockPushRoute: jest.Mock<any, any>;
    mockOnTransition: jest.Mock<any, any>;
}
declare class TestEnv<MutationNames extends string, TestPage extends RootTestPage> {
    private opts;
    constructor(opts: {
        Component: React.ComponentType<any>;
        query: GraphQLTaggedNode;
        defaultData: object;
        defaultMutationResults?: Record<MutationNames, any>;
        defaultBreakpoint?: Breakpoint;
        TestPage: {
            new (): TestPage;
        };
    });
    mutations: Mutations<MutationNames>;
    routes: Routes;
    readonly headTags: Array<ReactElement<any>>;
    private errors;
    /**
     * buildPage
     * @param opts.mockData supplementary mock data to supply to the page
     * @param opts.mockMutationResults supplementary mutation results to use
     * @param opts.breakpoint set the breakpoint for the page
     */
    buildPage: ({ mockData, mockMutationResults, breakpoint, }?: {
        mockData?: object;
        mockMutationResults?: Record<MutationNames, any>;
        breakpoint?: "xs" | "sm" | "md" | "xl" | "lg";
    }) => Promise<TestPage>;
}
/**
 * createTestEnv
 *
 * Creates a testing environment for a relay-powered component. The environment
 * has useful tooling for dealing with relay data. Especially for mocking mutation
 * results and for abstracting away boilerplate.
 *

 * @param opts.Component the component to render. Will be passed props
  `relay: RelayProp`, a mock for `route: { onTransition(cb): void {} }` and a
  mock for `router: { push(route: string) }, along with any query-derived props`
 * @param opts.query The graphql query for the component
 * @param opts.defaultData The default mock data which metaphysics would return
 * for the given query
 * @param opts.defaultMutationResults The default results which metaphysics would
 * return for any mutations executed on the page. If the component executes mutations
 * and you want to test them, they must be declared here.
 * @param opts.defaultBreakpoint The default breakpoint to render the page at
 * @param opts.TestPage The page wrapper class to use. Must extend RootTestPage
 * TODO: add support for query variables
 */
export declare function createTestEnv<MutationNames extends string, TestPage extends RootTestPage>(opts: TestEnv<MutationNames, TestPage>["opts"]): TestEnv<MutationNames, TestPage>;
export {};
