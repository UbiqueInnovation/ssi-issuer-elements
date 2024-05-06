class Config {
  static instance: Config;

  private _baseUrl = "";

  constructor() {
    if (Config.instance) {
      return Config.instance;
    }

    Config.instance = this;
  }

  get baseUrl() {
    if (!this._baseUrl) {
      throw new Error(
        "The base url has not been initialized. Execute `config.init()` before reading any config properties."
      );
    }
    return this._baseUrl;
  }

  init({ baseUrl }: { baseUrl: string }) {
    this._baseUrl = baseUrl;
  }
}

export const config = new Config();
