/// <reference types="jest" />
export declare const shouldCaptureError: any;
export declare const createLogger: jest.Mock<{
    log: jest.Mock<any, any>;
    warn: jest.Mock<any, any>;
    error: jest.Mock<any, any>;
}, []>;
export default createLogger;
