import { Wallet } from "../../types";
import { Api } from "../handler/api";

export const getWallet = () => {
  return new Api().get<Wallet>("/wallet");
};
