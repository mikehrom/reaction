import React from "react";
interface FollowIconProps {
    readonly isFollowed?: boolean | false;
}
export declare const FollowIconContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps>;
export declare class FollowIcon extends React.Component<FollowIconProps> {
    render(): JSX.Element;
}
export {};
