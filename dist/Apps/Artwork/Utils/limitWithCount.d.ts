/**
 * Helper function to limit array of strings for shorter displays
 * @param initial array of strings to chech for the limit
 * @param limit number of elements to keep
 *
 * @example
   ```tsx
   it("returns array of limit number of elements and count of the rest", () => {
    const initial = ["let", "there", "be", "light"]
    const limit = 2
    const limited = limitWithCount(initial, limit)
    expect(limited).toEqual(["let", "there", "+2 more"]) })
   ```
 */
export declare const limitWithCount: (initial: readonly string[], limit: number) => readonly string[];
