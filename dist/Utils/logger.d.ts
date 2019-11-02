export declare const shouldCaptureError: (environment: string) => boolean;
export default function createLogger(namespace?: string): {
    log: (...messages: any[]) => void;
    warn: (...warnings: any[]) => void;
    error: (...errors: any[]) => void;
};
