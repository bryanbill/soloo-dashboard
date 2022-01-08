import axios, { AxiosInstance } from "axios";

export class Api {
  private headers = {};
  protected baseUrl = "http://localhost:4040/v1";
  private instance: AxiosInstance;
  constructor() {
    this.headers = {
      withCredentials: true,
      baseUrl: this.baseUrl,
    };
    this.instance = axios.create(this.headers);
  }
  public async get<T>(url: string): Promise<T> {
    return (
      await this.instance.get(this.baseUrl + url, { withCredentials: true })
    ).data;
  }
  public post<T>(url: string, data: any): Promise<T> {
    return this.instance.post(url, data);
  }
  public put<T>(url: string, data: any): Promise<T> {
    return this.instance.put(url, data);
  }
  public delete<T>(url: string): Promise<T> {
    return this.instance.delete(url);
  }
  public patch<T>(url: string, data: any): Promise<T> {
    return this.instance.patch(url, data);
  }
}
