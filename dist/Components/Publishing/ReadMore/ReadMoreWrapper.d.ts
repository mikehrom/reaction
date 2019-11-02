import React from "react";
interface ReadMoreWrapperProps {
    isTruncated: boolean;
    hideButton: () => void;
}
interface ReadMoreWrapperState {
    truncationHeight: number | string;
}
/**
 * @deprecated in favor of our Design System ReadMore component in @artsy/palette
 * https://palette.artsy.net/elements/layout/readmore
 */
export declare class ReadMoreWrapper extends React.Component<ReadMoreWrapperProps, ReadMoreWrapperState> {
    state: {
        truncationHeight: string;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    truncateArticle: () => void;
    calculateTruncationHeight: () => number | "100%";
    getTruncationHeight: () => string;
    getOverflow: () => "auto" | "hidden";
    render(): JSX.Element;
}
export {};
