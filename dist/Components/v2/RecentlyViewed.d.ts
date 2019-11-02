import { RecentlyViewed_me } from "__generated__/RecentlyViewed_me.graphql";
import React from "react";
export interface RecentlyViewedProps {
    me: RecentlyViewed_me;
}
export declare class RecentlyViewed extends React.Component<RecentlyViewedProps> {
    trackClick(): void;
    render(): JSX.Element;
}
export declare const RecentlyViewedFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<RecentlyViewedProps, "me">> & import("react-relay").ComponentRef>;
export declare const RecentlyViewedQueryRenderer: () => JSX.Element;
