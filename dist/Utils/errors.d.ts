export declare class NetworkError extends Error {
    response: any;
}
export declare class ErrorWithMetadata extends Error {
    metadata: object;
    constructor(message: any, metadata?: {});
}
export declare const reportError: (error: any) => (scope: any) => void;
export declare const sendErrorToService: (error: Error | ErrorWithMetadata) => void;
