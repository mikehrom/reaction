import React from "react";
import { ItemReview_lineItem } from "__generated__/ItemReview_lineItem.graphql";
interface ItemReviewProps {
    lineItem: ItemReview_lineItem;
}
export declare const ItemReview: React.SFC<ItemReviewProps>;
export declare const ItemReviewFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ItemReviewProps, "lineItem">> & import("react-relay").ComponentRef>;
export {};
