import { ConcreteRequest } from "relay-runtime";
import { MockRelayRendererFixtures_artist$ref } from "./MockRelayRendererFixtures_artist.graphql";
export declare type MockRelayRendererFixturesArtistQueryVariables = {
    readonly id: string;
};
export declare type MockRelayRendererFixturesArtistQueryResponse = {
    readonly artist: ({
        readonly " $fragmentRefs": MockRelayRendererFixtures_artist$ref;
    }) | null;
};
export declare type MockRelayRendererFixturesArtistQuery = {
    readonly response: MockRelayRendererFixturesArtistQueryResponse;
    readonly variables: MockRelayRendererFixturesArtistQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
