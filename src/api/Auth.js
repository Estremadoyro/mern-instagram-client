import axios from "axios";
import { resolver } from "../resolvers/Resolver";

export const login = async (email, password) => {
  return await resolver(
    axios.post("/login", { email, password }).then((res) => res.data)
  );
};

export const register = async (email, username, name, password) => {
  return await resolver(
    axios.post("/register", {
      email,
      username,
      name,
      password,
    })
  ).then((res) => res.data);
};
