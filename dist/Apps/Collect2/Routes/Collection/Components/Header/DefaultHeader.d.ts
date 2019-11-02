import { DefaultHeader_headerArtworks } from "__generated__/DefaultHeader_headerArtworks.graphql";
import React, { FC } from "react";
interface CollectionDefaultHeaderProps {
    headerArtworks: DefaultHeader_headerArtworks;
    defaultHeaderImageHeight: number;
    collection_id: string;
    collection_slug: string;
}
export declare const CollectionDefaultHeader: FC<CollectionDefaultHeaderProps>;
export declare const getHeaderArtworks: (artworksArray: any[], headerWidth: number, isSmallViewport: boolean) => any[];
export declare const CollectionDefaultHeaderFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CollectionDefaultHeaderProps, "headerArtworks" | "defaultHeaderImageHeight" | "collection_id" | "collection_slug">> & import("react-relay").ComponentRef>;
export {};
