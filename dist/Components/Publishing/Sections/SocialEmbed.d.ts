import "isomorphic-fetch";
import React from "react";
import { SectionData } from "../Typings";
export interface SocialEmbedProps {
    section: SectionData;
}
interface SocialEmbedState {
    html: string;
}
export declare class SocialEmbed extends React.Component<SocialEmbedProps, SocialEmbedState> {
    state: {
        html: string;
    };
    componentDidMount(): void;
    getTwitterEmbed: (url: any) => void;
    getInstagramEmbed: (url: any) => void;
    getEmbedUrl: () => string;
    render(): false | JSX.Element;
}
export {};
