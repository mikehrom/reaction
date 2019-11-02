import React from "react";
import { LoadProgressRenderer } from "Artsy/Relay/renderWithLoadProgress";
import { NotificationsMenuQueryResponse } from "__generated__/NotificationsMenuQuery.graphql";
export declare const NotificationMenuItems: React.FC<NotificationsMenuQueryResponse>;
/**
 * The <Menu /> component renders a QueryRenderer inside of it, which fetches
 * individual MenuItems for display. During fetch there is a loading spinner.
 */
export declare const NotificationsMenu: React.FC;
/**
 * This QueryRenderer is also shared with NotificationBadge. Once the request
 * is performed the data is cached at the network layer so menu data appears
 * immediately and doesn't require a second request.
 */
export declare const NotificationsQueryRenderer: React.FC<{
    render: LoadProgressRenderer<any>;
}>;
