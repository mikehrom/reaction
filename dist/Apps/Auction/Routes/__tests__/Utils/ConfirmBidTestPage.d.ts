/// <reference types="react" />
import { RootTestPage } from "DevTools/RootTestPage";
export declare class ConfirmBidTestPage extends RootTestPage {
    readonly confirmBidButton: import("enzyme").ReactWrapper<import("enzyme").HTMLAttributes, any, import("react").Component<{}, {}, any>>;
    readonly selectBidAmountInput: import("enzyme").ReactWrapper<import("enzyme").HTMLAttributes, {}, import("react").Component<{}, {}, any>>;
    readonly form: import("enzyme").ReactWrapper<import("enzyme").HTMLAttributes, {}, import("react").Component<{}, {}, any>>;
    readonly agreeToTermsInput: import("enzyme").ReactWrapper<import("@artsy/palette").CheckboxProps, {}, import("react").Component<{}, {}, any>>;
    agreeToTerms(): Promise<void>;
    submitForm(): Promise<void>;
}
