import React from "react";
export interface Address {
    name: string;
    country: string;
    postalCode: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    region: string;
    phoneNumber: string;
}
export declare type AddressErrors = Partial<Address>;
export declare type AddressTouched = Partial<{
    [T in keyof Address]: boolean;
}>;
export declare type AddressChangeHandler = (address: Address, key: keyof Address) => void;
export declare const emptyAddress: Address;
export interface AddressFormProps {
    onChange: AddressChangeHandler;
    value?: Partial<Address>;
    billing?: boolean;
    domesticOnly?: boolean;
    showPhoneNumberInput?: boolean;
    shippingCountry?: string;
    errors: AddressErrors;
    touched: AddressTouched;
}
interface AddressFormState {
    address: Address;
}
export declare class AddressForm extends React.Component<AddressFormProps, AddressFormState> {
    state: {
        address: {
            name: string;
            country: string;
            postalCode: string;
            addressLine1: string;
            addressLine2: string;
            city: string;
            region: string;
            phoneNumber: string;
        };
    };
    changeEventHandler: (key: "region" | "name" | "postalCode" | "city" | "country" | "addressLine1" | "addressLine2" | "phoneNumber") => (ev: React.FormEvent<HTMLInputElement>) => void;
    changeValueHandler: (key: "region" | "name" | "postalCode" | "city" | "country" | "addressLine1" | "addressLine2" | "phoneNumber") => (value: string) => void;
    onChangeValue: (key: "region" | "name" | "postalCode" | "city" | "country" | "addressLine1" | "addressLine2" | "phoneNumber", value: string) => void;
    getError: (key: "region" | "name" | "postalCode" | "city" | "country" | "addressLine1" | "addressLine2" | "phoneNumber") => string;
    phoneNumberInputDescription: () => string;
    render(): JSX.Element;
}
export {};
