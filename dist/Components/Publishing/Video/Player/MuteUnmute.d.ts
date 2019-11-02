import React from "react";
interface Props extends React.HTMLProps<HTMLSpanElement> {
    isMuted: boolean;
    toggleMute: () => void;
}
export declare class MuteUnmute extends React.PureComponent<Props, null> {
    render(): JSX.Element;
}
export declare const MuteUnmuteContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
