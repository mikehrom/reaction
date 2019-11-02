import { RouteConfig } from "found";
import React from "react";
import { Environment } from "relay-runtime";
import { MatchingMediaQueries } from "Utils/Responsive";
export interface BootProps {
    context: object;
    user: User;
    onlyMatchMediaQueries?: MatchingMediaQueries;
    relayEnvironment: Environment;
    routes: RouteConfig;
    headTags?: JSX.Element[];
}
export declare class Boot extends React.Component<BootProps> {
    componentDidMount(): void;
    render(): JSX.Element;
}
