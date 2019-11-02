/// <reference types="react" />
import { RootTestPage } from "DevTools/RootTestPage";
export declare class OrderAppTestPage extends RootTestPage {
    /** COMPONENT SELECTORS **/
    readonly orderStepper: import("enzyme").ReactWrapper<unknown, {}, import("react").Component<{}, {}, any>>;
    readonly orderStepperCurrentStep: any;
    readonly transactionSummary: import("enzyme").ReactWrapper<import("../../../Components/TransactionDetailsSummaryItem").TransactionDetailsSummaryItemProps, {}, import("react").Component<{}, {}, any>>;
    readonly artworkSummary: import("enzyme").ReactWrapper<any, {}, import("react").Component<{}, {}, any>>;
    readonly shippingSummary: import("enzyme").ReactWrapper<any, {}, import("react").Component<{}, {}, any>>;
    readonly paymentSummary: import("enzyme").ReactWrapper<any, {}, import("react").Component<{}, {}, any>>;
    readonly countdownTimer: import("enzyme").ReactWrapper<import("react").PropsWithChildren<{
        action: string;
        note: string;
        countdownStart: string;
        countdownEnd: string;
    }>, {}, import("react").Component<{}, {}, any>>;
    readonly conditionsOfSaleDisclaimer: import("enzyme").ReactWrapper<import("react").PropsWithChildren<Partial<import("@artsy/palette").SansProps>>, {}, import("react").Component<{}, {}, any>>;
    readonly modalDialog: import("enzyme").ReactWrapper<import("../../../../../Components/Modal/ModalDialog").ModalDialogProps, {}, import("react").Component<{}, {}, any>>;
    readonly submitButton: import("enzyme").ReactWrapper<import("@artsy/palette").WebButtonProps, {}, import("react").Component<{}, {}, any>>;
    readonly offerInput: import("enzyme").ReactWrapper<import("../../../Components/OfferInput").OfferInputProps, {}, import("react").Component<{}, {}, any>>;
    /** PAGE ACTIONS **/
    clickSubmit(): Promise<void>;
    dismissModal(): Promise<void>;
    /*** COMMON ASSERTIONS ***/
    expectAndDismissDefaultErrorDialog(): Promise<void>;
    expectAndDismissErrorDialogMatching(title: string, message: string, buttonText?: string): Promise<void>;
    setOfferAmount(amount: number): Promise<void>;
    expectButtonSpinnerWhenSubmitting(): Promise<void>;
}
