/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type LotInfo_saleArtwork = {
    readonly counts: {
        readonly bidderPositions: number | null;
    } | null;
    readonly lotLabel: string | null;
    readonly minimumNextBid: {
        readonly amount: string | null;
        readonly cents: number | null;
        readonly display: string | null;
    } | null;
    readonly " $refType": "LotInfo_saleArtwork";
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "LotInfo_saleArtwork",
  "type": "SaleArtwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "counts",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkCounts",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "bidderPositions",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lotLabel",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "minimumNextBid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkMinimumNextBid",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "amount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cents",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "display",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '63b064c2ebb6bd882a64156300b78631';
export default node;
