import { Status_order } from "__generated__/Status_order.graphql";
import { Router } from "found";
import React, { Component } from "react";
interface StatusPageConfig {
    title: React.ReactNode;
    description: React.ReactNode;
    showTransactionSummary?: boolean;
}
export interface StatusProps {
    order: Status_order;
    router: Router;
}
export declare class StatusRoute extends Component<StatusProps> {
    getStatusCopy(): StatusPageConfig;
    getCanceledOfferOrderCopy(): StatusPageConfig;
    getFulfilmentDescription(): React.ReactNode;
    render(): JSX.Element;
}
export declare const StatusFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<StatusProps, "order" | "router">> & import("react-relay").ComponentRef>;
export {};
