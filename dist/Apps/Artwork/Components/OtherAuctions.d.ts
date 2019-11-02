import { OtherAuctions_sales } from "__generated__/OtherAuctions_sales.graphql";
import React from "react";
interface OtherAuctionsProps {
    sales: OtherAuctions_sales;
}
export declare class OtherAuctions extends React.Component<OtherAuctionsProps> {
    render(): JSX.Element;
}
export declare const OtherAuctionsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<OtherAuctionsProps, "sales">> & import("react-relay").ComponentRef>;
export declare const OtherAuctionsQueryRenderer: () => JSX.Element;
export {};
