/// <reference types="stripe-v3" />
import { OrderApp_order } from "__generated__/OrderApp_order.graphql";
import { Mediator } from "Artsy";
import { Location, RouteConfig, Router } from "found";
import React from "react";
declare global {
    interface Window {
        Stripe?: (key: string) => stripe.Stripe;
        sd: {
            STRIPE_PUBLISHABLE_KEY: string;
        };
    }
}
export interface OrderAppProps {
    params: {
        orderID: string;
    };
    location: Location;
    routeIndices: number[];
    routes: RouteConfig[];
    router: Router;
    order: OrderApp_order;
}
interface OrderAppState {
    stripe: stripe.Stripe;
}
export declare class OrderApp extends React.Component<OrderAppProps, OrderAppState> {
    mediator: Mediator | null;
    state: {
        stripe: any;
    };
    removeTransitionHook: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onTransition: (newLocation: any) => any;
    render(): JSX.Element;
}
export {};
