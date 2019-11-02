import { Mediator } from "Artsy";
import React, { SFC } from "react";
import { ArtworkSidebarExtraLinks_artwork } from "__generated__/ArtworkSidebarExtraLinks_artwork.graphql";
export interface ArtworkSidebarExtraLinksProps {
    artwork: ArtworkSidebarExtraLinks_artwork;
}
export interface ArtworkSidebarExtraLinksContainerProps extends ArtworkSidebarExtraLinksProps {
    mediator: Mediator;
}
export declare const ArtworkSidebarExtraLinks: SFC<ArtworkSidebarExtraLinksProps>;
export declare const ArtworkSidebarExtraLinksFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarExtraLinksProps, "artwork">> & import("react-relay").ComponentRef>;
