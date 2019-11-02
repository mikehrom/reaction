import { OtherWorks_artwork } from "__generated__/OtherWorks_artwork.graphql";
import { Mediator, SystemContextProps } from "Artsy";
import React from "react";
export interface OtherWorksContextProps {
    artwork: OtherWorks_artwork;
    mediator?: Mediator;
}
/**
 * Check to see if a connection's edges have a length; if false hide the grid.
 */
export declare function hideGrid(artworksConnection: any): boolean;
export declare const OtherWorks: (props: {
    artwork: OtherWorks_artwork;
} & SystemContextProps) => JSX.Element;
export declare const OtherWorksFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<{
    artwork: OtherWorks_artwork;
}, "artwork">> & import("react-relay").ComponentRef>;
