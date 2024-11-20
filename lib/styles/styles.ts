import { css } from "lit";

export const GLOBAL_CSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  #root {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: inherit;
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;

    color: #000000;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  canvas {
    image-rendering: pixelated;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;
