import { Config } from "../types";

export function useConfig() {
  if (!window.ssiElementsConfig) {
    throw new Error(
      "The config has not been initialized. Execute `config.init()` before any properties are read."
    );
  }
  return window.ssiElementsConfig;
}

declare global {
  interface Window {
    ssiElementsConfig: Config | undefined;
  }
}
