import { User } from "../../types";
import { Api } from "../handler/api";

export const getUser = () => {
  return new Api().get<User>("/users");
};
