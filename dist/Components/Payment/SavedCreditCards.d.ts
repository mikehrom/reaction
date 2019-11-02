import { UserSettingsPayments_me } from "__generated__/UserSettingsPayments_me.graphql";
import React, { SFC } from "react";
import { RelayProp } from "react-relay";
import { CreditCardType } from "./UserSettingsPayments";
interface SavedCreditCardsProps {
    creditCards: [CreditCardType];
    me: UserSettingsPayments_me;
    relay?: RelayProp;
}
interface CreditCardsState {
    isErrorModalOpen: boolean;
    isCommittingMutation: boolean;
}
interface CreditCardProps {
    creditCard?: CreditCardType;
    me: UserSettingsPayments_me;
    relay?: RelayProp;
}
export declare class CreditCard extends React.Component<CreditCardProps, CreditCardsState> {
    state: {
        isErrorModalOpen: boolean;
        isCommittingMutation: boolean;
    };
    render(): JSX.Element;
    onCloseModal: () => void;
    private deleteCreditCard;
    private onCreditCardDeleted;
    private onMutationError;
}
export declare const RemoveLink: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const SavedCreditCards: SFC<SavedCreditCardsProps>;
export {};
