import * as Artsy from "Artsy";
import { ArticleData } from "Components/Publishing/Typings";
import { Component } from "react";
import { ArticleProps } from "../Article";
interface Props extends Artsy.SystemContextProps {
    article: ArticleData;
    shouldFetchData?: boolean;
    onOpenAuthModal?: ArticleProps["onOpenAuthModal"];
}
export declare class TooltipsDataLoader extends Component<Props> {
    static defaultProps: {
        shouldFetchData: boolean;
    };
    render(): {};
}
export declare const TooltipsData: (props: any) => JSX.Element;
export {};
