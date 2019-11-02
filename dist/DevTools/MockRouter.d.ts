import { RouterConfig } from "Artsy/Router";
import { HistoryOptions } from "farce";
import { RouteConfig } from "found";
import { IMocks } from "graphql-tools/dist/Interfaces";
import React from "react";
interface Props {
    routes: RouteConfig[];
    initialRoute?: string;
    initialState?: object;
    historyOptions?: HistoryOptions;
    mockResolvers?: IMocks;
    mockData?: object;
    mockMutationResults?: object;
    context?: RouterConfig["context"];
}
export declare class MockRouter extends React.Component<Props> {
    state: {
        ClientApp: any;
    };
    static defaultProps: {
        initialRoute: string;
    };
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
