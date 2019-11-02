import * as Artsy from "Artsy";
import React from "react";
import { RelayProp } from "react-relay";
import { TrackingProp } from "react-tracking";
import { FollowGeneButton_gene } from "../../__generated__/FollowGeneButton_gene.graphql";
import { FollowTrackingData } from "./Typings";
interface Props extends React.HTMLProps<FollowGeneButton>, Artsy.SystemContextProps {
    relay?: RelayProp;
    gene?: FollowGeneButton_gene;
    tracking?: TrackingProp;
    trackingData?: FollowTrackingData;
    onOpenAuthModal?: (type: "register" | "login", config?: object) => void;
}
export declare class FollowGeneButton extends React.Component<Props> {
    trackFollow: () => void;
    handleFollow: () => void;
    render(): JSX.Element;
}
export declare const FollowGeneButtonFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export {};
