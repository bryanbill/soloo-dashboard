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
  public get<T>(url: string): Promise<T> {
    return this.instance.get(url);
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
