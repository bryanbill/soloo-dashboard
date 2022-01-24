export class Constants {
  private _url: string;
  private isDev: boolean;

  constructor() {
    this.isDev = process.env.NODE_ENV === "development";
    this._url = this.isDev
      ? process.env.REACT_APP_API_URL_DEV
      : process.env.REACT_APP_API_URL_PROD;
  }

  get url(): string {
    return this._url;
  }
}
