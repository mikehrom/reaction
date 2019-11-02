import { SystemContextProps } from "Artsy";
import { Component } from "react";
export interface Props extends SystemContextProps {
    artistID?: string;
    forSale?: boolean;
}
export declare class WorksForYou extends Component<Props> {
    static defaultProps: {
        forSale: boolean;
        artistID: string;
    };
    render(): JSX.Element;
}
