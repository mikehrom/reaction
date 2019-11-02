import { Breakpoint } from "@artsy/palette";
/**
 * Returns an object containing keys representing each media query as they're
 * defined in Palette's theme file, and if they're currently matching.
 *
 * NOTE: useMedia is not meant to be run on the server.
 *
 * See: https://github.com/artsy/palette/blob/master/packages/palette/src/Theme.tsx#L84-L92
 *
 * @example

    import { useMedia } from 'Utils/Hooks/useMedia'

    const App = () => {
      const { xs, sm, md, lg, xl } = useMedia()

      return (
        <div>Mobile view? {xs || sm}</div>
      )
    }
 */
export declare function useMedia(): {
    [k in Breakpoint]?: boolean;
};
/**
 * Checks to see if the browser matches a particular media query
 *
 * Thanks! https://github.com/olistic/react-use-media/
 *
 * @example

    import { themeProps } from '@artsy/palette'
    import { useMedia } from 'Utils/Hooks/useMedia'

    const App = () => {
      const isMobile = useMedia(themeProps.mediaQueries.sm)

      return (
        <div>Mobile view? {isMobile}</div>
      )
    }
 */
export declare function useMatchMedia(mediaQueryString: string, { initialMatches }?: {
    initialMatches?: any;
}): any;
