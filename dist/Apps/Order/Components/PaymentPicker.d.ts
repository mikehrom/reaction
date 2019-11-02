/// <reference types="stripe-v3" />
import { PaymentPicker_me } from "__generated__/PaymentPicker_me.graphql";
import { PaymentPicker_order } from "__generated__/PaymentPicker_order.graphql";
import { Address, AddressErrors, AddressTouched } from "Apps/Order/Components/AddressForm";
import React from "react";
import { ReactStripeElements } from "react-stripe-elements";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
export interface PaymentPickerProps extends ReactStripeElements.InjectedStripeProps {
    order: PaymentPicker_order;
    me: PaymentPicker_me;
    commitMutation: CommitMutation;
    innerRef: React.RefObject<PaymentPicker>;
}
interface PaymentPickerState {
    hideBillingAddress: boolean;
    address: Address;
    addressErrors: AddressErrors;
    addressTouched: AddressTouched;
    stripeError: stripe.Error;
    isCreatingStripeToken: boolean;
    creditCardSelection: {
        type: "existing";
        id: string;
    } | {
        type: "new";
    };
    saveNewCreditCard: boolean;
}
export declare class PaymentPicker extends React.Component<PaymentPickerProps, PaymentPickerState> {
    state: {
        hideBillingAddress: boolean;
        stripeError: any;
        isCreatingStripeToken: boolean;
        address: Address;
        addressErrors: {};
        addressTouched: {};
        creditCardSelection: {
            type: "existing";
            id: string;
        } | {
            type: "new";
        };
        saveNewCreditCard: boolean;
    };
    private getInitialCreditCardSelection;
    private startingAddress;
    private readonly touchedAddress;
    private createStripeToken;
    getCreditCardId: () => Promise<{
        type: "error";
        error: string | undefined;
    } | {
        type: "internal_error";
        error: string | undefined;
    } | {
        type: "invalid_form";
    } | {
        type: "success";
        creditCardId: string;
    }>;
    private handleChangeHideBillingAddress;
    private onAddressChange;
    render(): JSX.Element;
    private getStripeBillingAddress;
    private createCreditCard;
    private isPickup;
    private needsAddress;
}
export declare const PaymentPickerFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<PaymentPickerProps & {
    innerRef: React.RefObject<PaymentPicker>;
}, "order" | "me" | "stripe" | "commitMutation" | "innerRef">> & import("react-relay").ComponentRef>;
export {};
