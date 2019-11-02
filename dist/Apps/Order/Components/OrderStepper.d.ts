/// <reference types="react" />
export declare const offerFlowSteps: ("Offer" | "Shipping" | "Payment" | "Review")[];
export declare const buyNowFlowSteps: ("Shipping" | "Payment" | "Review")[];
export declare const counterofferFlowSteps: ("Review" | "Respond")[];
export declare function OrderStepper<Steps extends string[]>({ currentStep, steps, }: {
    steps: Steps;
    currentStep: Steps extends Array<infer K> ? K : never;
}): JSX.Element;
