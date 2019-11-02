import { ConcreteFragment } from "relay-runtime";
import { MockRelayRendererFixtures_artworkMetadata$ref } from "./MockRelayRendererFixtures_artworkMetadata.graphql";
declare const _MockRelayRendererFixtures_artwork$ref: unique symbol;
export declare type MockRelayRendererFixtures_artwork$ref = typeof _MockRelayRendererFixtures_artwork$ref;
export declare type MockRelayRendererFixtures_artwork = {
    readonly image: ({
        readonly url: string | null;
    }) | null;
    readonly artist: ({
        readonly id: string;
    }) | null;
    readonly " $fragmentRefs": MockRelayRendererFixtures_artworkMetadata$ref;
    readonly " $refType": MockRelayRendererFixtures_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
