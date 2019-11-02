import { CollectionEntity_collection } from "__generated__/CollectionEntity_collection.graphql";
import React from "react";
export interface CollectionProps {
    collection: CollectionEntity_collection;
}
export declare const Background: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps & {
    collectionImage: string;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps & {
    collectionImage: string;
}>;
export declare const StyledLink: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & import("@artsy/palette").LinkProps, any, React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & import("@artsy/palette").LinkProps>;
export declare class CollectionEntity extends React.Component<CollectionProps> {
    onLinkClick(): void;
    render(): JSX.Element;
}
export declare const CollectionEntityFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CollectionProps, "collection">> & import("react-relay").ComponentRef>;
