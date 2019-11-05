/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NewPayment_me = {
    readonly " $fragmentRefs": FragmentRefs<"PaymentPicker_me">;
    readonly " $refType": "NewPayment_me";
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "NewPayment_me",
  "type": "Me",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PaymentPicker_me",
      "args": null
    }
  ]
};
(node as any).hash = '7bb5f7c3b4fe86e246747b31a9b14b64';
export default node;
