import { TagArtworksContent_filtered_artworks } from "__generated__/TagArtworksContent_filtered_artworks.graphql";
import React from "react";
import { RelayPaginationProp } from "react-relay";
export interface Props {
    filtered_artworks: TagArtworksContent_filtered_artworks;
    relay: RelayPaginationProp;
    tagID: string;
}
export interface State {
    loading: boolean;
}
export declare class TagArtworksContent extends React.Component<Props, State> {
    private finishedPaginatingWithError;
    state: {
        loading: boolean;
    };
    loadMoreArtworks(): void;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "filtered_artworks" | "tagID">> & import("react-relay").ComponentRef>;
export default _default;
