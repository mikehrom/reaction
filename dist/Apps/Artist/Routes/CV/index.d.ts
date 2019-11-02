import { CV_viewer } from "__generated__/CV_viewer.graphql";
import React, { Component } from "react";
export interface CVRouteProps {
    viewer: CV_viewer;
}
export declare class CVRoute extends Component<CVRouteProps> {
    render(): JSX.Element;
}
export declare const CVRouteFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CVRouteProps, "viewer">> & import("react-relay").ComponentRef>;
