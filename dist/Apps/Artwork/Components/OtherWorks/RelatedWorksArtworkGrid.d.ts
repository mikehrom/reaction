import { RelatedWorksArtworkGrid_artwork } from "__generated__/RelatedWorksArtworkGrid_artwork.graphql";
import { Mediator } from "Artsy";
import React from "react";
import { RelayRefetchProp } from "react-relay";
interface RelatedWorksArtworkGridProps {
    relay: RelayRefetchProp;
    artwork: RelatedWorksArtworkGrid_artwork;
    mediator?: Mediator;
}
export declare const RelatedWorksArtworkGridRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<RelatedWorksArtworkGridProps, "mediator" | "artwork">> & import("react-relay").ComponentRef>;
export declare const RelatedWorksArtworkGridQueryRenderer: React.SFC<{
    artworkSlug: string;
}>;
export {};
