import { Shipping_order } from "__generated__/Shipping_order.graphql";
import { CommerceOrderFulfillmentTypeEnum, ShippingOrderAddressUpdateMutation } from "__generated__/ShippingOrderAddressUpdateMutation.graphql";
import { Address, AddressChangeHandler, AddressErrors, AddressTouched } from "Apps/Order/Components/AddressForm";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
import { Router } from "found";
import React, { Component } from "react";
import { RelayProp } from "react-relay";
export interface ShippingProps {
    order: Shipping_order;
    relay?: RelayProp;
    router: Router;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
export interface ShippingState {
    shippingOption: CommerceOrderFulfillmentTypeEnum;
    address: Address;
    addressErrors: AddressErrors;
    addressTouched: AddressTouched;
}
export declare class ShippingRoute extends Component<ShippingProps, ShippingState> {
    state: ShippingState;
    readonly startingAddress: {
        __typename?: "CommerceShip";
        name: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        region: string;
        country: string;
        postalCode: string;
        phoneNumber: string;
    } | {
        __typename?: "%other";
        country: string;
        name: string;
        postalCode: string;
        addressLine1: string;
        addressLine2: string;
        city: string;
        region: string;
        phoneNumber: string;
    };
    readonly touchedAddress: {
        name: boolean;
        country: boolean;
        postalCode: boolean;
        addressLine1: boolean;
        addressLine2: boolean;
        city: boolean;
        region: boolean;
        phoneNumber: boolean;
    };
    setShipping(variables: ShippingOrderAddressUpdateMutation["variables"]): Promise<import("../../../../__generated__/ShippingOrderAddressUpdateMutation.graphql").ShippingOrderAddressUpdateMutationResponse>;
    onContinueButtonPressed: () => Promise<void>;
    handleSubmitError(error: {
        code: string;
        data: string;
    }): void;
    private validateAddress;
    onAddressChange: AddressChangeHandler;
    onSelectShippingOption(shippingOption: CommerceOrderFulfillmentTypeEnum): void;
    render(): JSX.Element;
}
export declare const ShippingFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<ShippingProps, "relay" | "order" | "router" | "isCommittingMutation" | "commitMutation">, "relay" | "order" | "router">, "order" | "router">> & import("react-relay").ComponentRef>;
