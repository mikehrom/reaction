import { UserSettingsPayments_me } from "__generated__/UserSettingsPayments_me.graphql";
import { SystemContextProps } from "Artsy";
import React from "react";
import { RelayProp } from "react-relay";
interface UserSettingsPaymentsProps extends SystemContextProps {
    relay?: RelayProp;
    me: UserSettingsPayments_me;
}
export declare class UserSettingsPayments extends React.Component<UserSettingsPaymentsProps> {
    render(): JSX.Element;
}
export interface CreditCardType {
    __id: string;
    id: string;
    brand: string;
    last_digits: string;
    expiration_month: number;
    expiration_year: number;
    __typename: string;
}
export declare const UserSettingsPaymentsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<UserSettingsPaymentsProps, "user" | "isEigen" | "isFetching" | "mediator" | "notificationCount" | "relayEnvironment" | "searchQuery" | "setIsFetching" | "me">> & import("react-relay").ComponentRef>;
export declare const UserSettingsPaymentsQueryRenderer: () => JSX.Element;
export {};
