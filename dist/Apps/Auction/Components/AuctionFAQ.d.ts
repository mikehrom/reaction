import { AuctionFAQ_viewer } from "__generated__/AuctionFAQ_viewer.graphql";
import React from "react";
interface AuctionFAQProps {
    viewer: AuctionFAQ_viewer;
}
export declare const AuctionFAQ: React.FC<AuctionFAQProps>;
export declare const AuctionFAQFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<AuctionFAQProps, "viewer">> & import("react-relay").ComponentRef>;
export declare const AuctionFAQQueryRenderer: React.SFC;
export {};
