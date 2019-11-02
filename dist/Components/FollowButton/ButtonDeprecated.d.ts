import React from "react";
interface Props {
    handleFollow?: any;
    isFollowed?: boolean;
    buttonProps?: object;
}
interface State {
    showUnfollow: boolean;
}
export declare class FollowButtonDeprecated extends React.Component<Props, State> {
    static defaultProps: {
        isFollowed: boolean;
    };
    state: {
        showUnfollow: boolean;
    };
    render(): JSX.Element;
}
export {};
