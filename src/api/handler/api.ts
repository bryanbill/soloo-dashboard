import axios, { AxiosInstance } from "axios";
import { Constants } from "./constants";

export class Api {
  private headers = {};
  private instance: AxiosInstance;
  private baseUrl = new Constants().url;
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
