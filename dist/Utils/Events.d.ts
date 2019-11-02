declare global {
    interface Window {
        __reactionEventsEventEmitter: any;
    }
}
declare const _default: {
    postEvent: (data: any) => any;
    onEvent: (callback: any) => any;
    emitter: any;
};
export default _default;
