/// <reference types="styled-components" />
import { ArtistCollectionEntity_collection } from "__generated__/ArtistCollectionEntity_collection.graphql";
import React from "react";
export interface CollectionProps {
    collection: ArtistCollectionEntity_collection;
    lazyLoad: boolean;
}
export declare class ArtistCollectionEntity extends React.Component<CollectionProps> {
    onLinkClick(): void;
    render(): JSX.Element;
}
export declare const StyledLink: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & import("@artsy/palette").LinkProps, any, React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & import("@artsy/palette").LinkProps>;
export declare const ArtworkImage: import("styled-components").StyledComponentClass<import("@artsy/palette").WebImageProps & {
    width: number;
}, any, Pick<import("@artsy/palette").WebImageProps, "p" | "style" | "title" | "src" | "lazyLoad" | "height" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "width" | "aria-label" | "preventRightClick" | "alt" | "borderRadius"> & {
    theme?: any;
} & {
    width: number;
}>;
export declare const ArtistCollectionEntityFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CollectionProps, "lazyLoad" | "collection">> & import("react-relay").ComponentRef>;
