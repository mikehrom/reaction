export declare const crop: (src: string, options: {
    width: number;
    height: number;
    quality?: number;
}) => string;
export declare const resize: (src: string, options: {
    width?: number;
    height?: number;
    quality?: number;
    convert_to?: string;
}) => string;
