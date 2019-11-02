import { ButtonProps } from "@artsy/palette";
import React from "react";
interface Props {
    handleFollow?: any;
    isFollowed?: boolean;
    buttonProps?: Partial<ButtonProps>;
}
interface State {
    showUnfollow: boolean;
}
export declare class FollowButton extends React.Component<Props, State> {
    static defaultProps: {
        isFollowed: boolean;
        buttonProps: {};
    };
    state: {
        showUnfollow: boolean;
    };
    render(): JSX.Element;
}
export {};
