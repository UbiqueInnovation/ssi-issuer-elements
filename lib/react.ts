import { createComponent } from "@lit/react";
import React from "react";
import { SsiTransferProof as SsiTransferProofComponent } from "./components/ssi-transfer-proof";

export const SsiTransferProof = createComponent({
  tagName: "ssi-transfer-proof",
  elementClass: SsiTransferProofComponent,
  react: React,
  events: {},
});
