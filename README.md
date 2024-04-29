<div align="center">
  <a href="https://ubique.ch" target="_blank">
    <img src="./.github/assets/ub-logo.svg" width="120" style="margin-right: 32px;">
    <img src="./.github/assets/ssimply-wallet.png" width="90">
  </a>
</div>

# SSI Issuer Elements

This library provides components that can be used to display a qr code to transfer a proof to the ssimply wallet.

## Installation

```bash
pnpm install @ubique-innovation/ssi-issuer-elements
```

## Usage

The components can either be included using browser-native web components or with the generated react components.

### Web components

These components can be used in any environment, for example in a vue or vanilla javascript webapp.

```tsx
import "@ubique-innovation/ssi-issuer-elements/transfer-proof";

<ssi-transfer-proof
  transaction-id="your-transaction-id"
  invitation="https://your-invitation.url?with=parameters"
>
  <a href="/">
    <button>Fertig</button>
  </a>
</ssi-transfer-proof>;
```

### React

The components in the `/react` module were generated from the web components and can be used in a react environment.

```tsx
import { SsiTransferProof } from "@ubique-innovation/ssi-issuer-elements/react";

<SsiTransferProof
  transactionId="your-transaction-id"
  invitation="https://your-invitation.url?with=parameters"
>
  <a href="/">
    <button>Fertig</button>
  </a>
</SsiTransferProof>;
```
