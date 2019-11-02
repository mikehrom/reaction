/**
 * Adds a DataDog trace around a unit of work wrapped by a Promise.
 *
 * @param name The name/resource for the trace span.
 * @param work The `Promise` that is performing the work to be traced.
 */
export declare function trace<T extends Promise<any>>(name: string, work: T): T;
