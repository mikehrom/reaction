import React from "react";
interface Props extends React.HTMLProps<HTMLSpanElement> {
    isPlaying: boolean;
    togglePlay: () => void;
}
export declare class PlayPause extends React.PureComponent<Props, null> {
    render(): JSX.Element;
}
export {};
