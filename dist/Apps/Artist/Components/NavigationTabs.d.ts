import { NavigationTabs_artist } from "__generated__/NavigationTabs_artist.graphql";
import { SystemContextProps } from "Artsy";
import React from "react";
interface Props extends SystemContextProps {
    artist: NavigationTabs_artist;
}
export declare class NavigationTabs extends React.Component<Props> {
    handleClick(tab: string, destination_path: string): void;
    renderTab(text: string, to: string, options: {
        exact?: boolean;
        mediator: {
            trigger: (action: string, config: object) => void;
        };
    }): JSX.Element;
    renderTabs(): JSX.Element;
    render(): JSX.Element;
}
export declare const NavigationTabsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export {};
