import { BidForm_me } from "__generated__/BidForm_me.graphql";
import { BidForm_saleArtwork } from "__generated__/BidForm_saleArtwork.graphql";
import { FormikActions, FormikValues } from "formik";
import React from "react";
interface Props {
    initialSelectedBid?: string;
    me: BidForm_me;
    onSubmit: (values: FormikValues, actions: FormikActions<object>) => void;
    saleArtwork: BidForm_saleArtwork;
    showPricingTransparency?: boolean;
}
export declare const BidForm: React.FC<Props>;
export declare const BidFormFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "onSubmit" | "saleArtwork" | "me" | "initialSelectedBid" | "showPricingTransparency">> & import("react-relay").ComponentRef>;
export {};
