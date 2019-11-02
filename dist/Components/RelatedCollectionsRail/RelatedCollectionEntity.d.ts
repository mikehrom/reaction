import { RelatedCollectionEntity_collection } from "__generated__/RelatedCollectionEntity_collection.graphql";
import React from "react";
export interface CollectionProps {
    collection: RelatedCollectionEntity_collection;
}
export declare class RelatedCollectionEntity extends React.Component<CollectionProps> {
    onLinkClick(): void;
    render(): JSX.Element;
}
export declare const StyledLink: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & import("@artsy/palette").LinkProps, any, React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & import("@artsy/palette").LinkProps>;
export declare const ArtworkImage: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & {
    width: number;
}, any, React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & {
    width: number;
}>;
export declare const RelatedCollectionEntityFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CollectionProps, "collection">> & import("react-relay").ComponentRef>;
