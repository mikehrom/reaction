import React from "react";
interface ReadMoreProps {
    onClick: () => void;
    referrer: string;
}
/**
 * @deprecated in favor of our Design System ReadMore component in @artsy/palette
 * https://palette.artsy.net/elements/layout/readmore
 */
export declare class ReadMoreButton extends React.Component<ReadMoreProps> {
    trackImpression(): void;
    onClick(): void;
    render(): JSX.Element;
}
export declare const ReadMoreContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
