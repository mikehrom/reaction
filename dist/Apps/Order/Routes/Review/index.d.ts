/// <reference types="stripe-v3" />
import { Review_order } from "__generated__/Review_order.graphql";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
import { RouteConfig, Router } from "found";
import React, { Component } from "react";
import { RelayProp } from "react-relay";
export interface ReviewProps {
    order: Review_order;
    relay?: RelayProp;
    router: Router;
    route: RouteConfig;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
export interface ReviewState {
    stripe: stripe.Stripe;
}
export declare class ReviewRoute extends Component<ReviewProps, ReviewState> {
    state: {
        stripe: any;
    };
    componentDidMount(): void;
    onSubmit(setupIntentId?: null): Promise<void>;
    submitBuyOrder(): Promise<import("../../../../__generated__/ReviewSubmitOrderMutation.graphql").ReviewSubmitOrderMutationResponse>;
    submitOffer(setupIntentId: string | null): Promise<import("../../../../__generated__/ReviewSubmitOfferOrderMutation.graphql").ReviewSubmitOfferOrderMutationResponse>;
    handleSubmitError(error: {
        code: string;
        data: string;
    }): Promise<void>;
    artistId(): string;
    routeToArtworkPage(): void;
    routeToArtistPage(): void;
    onChangeOffer: () => void;
    onChangePayment: () => void;
    onChangeShipping: () => void;
    render(): JSX.Element;
}
export declare const ReviewFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<ReviewProps, "relay" | "order" | "router" | "isCommittingMutation" | "commitMutation" | "route">, "relay" | "order" | "router" | "route">, "order" | "router" | "route">> & import("react-relay").ComponentRef>;
