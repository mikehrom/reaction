import * as Artsy from "Artsy";
import React from "react";
import { TrackingProp } from "react-tracking";
import { FollowProfileButton_profile } from "../../__generated__/FollowProfileButton_profile.graphql";
import { FollowTrackingData } from "./Typings";
import { ButtonProps } from "@artsy/palette";
import { RelayProp } from "react-relay";
interface Props extends React.HTMLProps<FollowProfileButton>, Artsy.SystemContextProps {
    relay?: RelayProp;
    profile?: FollowProfileButton_profile;
    tracking?: TrackingProp;
    trackingData?: FollowTrackingData;
    onOpenAuthModal?: (type: "register" | "login", config?: object) => void;
    buttonProps?: Partial<ButtonProps>;
    /**
     * Custom renderer for alternative button displays
     */
    render?: (profile: FollowProfileButton_profile) => JSX.Element;
}
export declare class FollowProfileButton extends React.Component<Props> {
    static defaultProps: {
        buttonProps: {};
    };
    trackFollow: () => void;
    handleFollow: (e: any) => void;
    render(): JSX.Element;
}
export declare const FollowProfileButtonFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export {};
