import React, { FC } from "react";
import { Header_artworks } from "__generated__/Header_artworks.graphql";
export interface Props {
    collection: {
        artist_ids?: string[];
        category: string;
        credit?: string;
        description?: string;
        gene_ids?: string[];
        headerImage: string;
        major_periods?: string[];
        medium?: string;
        slug: string;
        title: string;
        query: any;
        id: string;
        featuredArtistExclusionIds?: string[];
    };
    artworks: Header_artworks;
}
export declare const getFeaturedArtists: (artistsCount: number, collection: any, merchandisableArtists: any) => unknown[];
export declare const featuredArtistsEntityCollection: (artists: any[], mediator: any, user: any) => JSX.Element[];
export declare const CollectionHeader: FC<Props>;
export declare const Overlay: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const CollectionFilterFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "artworks" | "collection">> & import("react-relay").ComponentRef>;
