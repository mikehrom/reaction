import { BidForm_saleArtwork } from "__generated__/BidForm_saleArtwork.graphql";
import { FormikActions, FormikValues } from "formik";
import React from "react";
interface Props {
    showPricingTransparency?: boolean;
    saleArtwork: BidForm_saleArtwork;
    initialSelectedBid?: string;
    onSubmit: (values: FormikValues, actions: FormikActions<object>) => void;
}
export declare const BidForm: React.FC<Props>;
export declare const BidFormFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "onSubmit" | "saleArtwork" | "initialSelectedBid" | "showPricingTransparency">> & import("react-relay").ComponentRef>;
export {};
