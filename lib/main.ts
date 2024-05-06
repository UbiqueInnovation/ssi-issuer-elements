import type { Config } from "./types";

export const config: Config = {
  baseUrl: "",
  init({ baseUrl }) {
    this.baseUrl = baseUrl;
    window.ssiElementsConfig = this;
  },
};
