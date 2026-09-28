import { LoginSchema } from "@/features/admin/validation/loginSchema";
import axios from "axios";

export async function loginApi({ email, password }: LoginSchema) {
  const apiUrl = "https://api.backendless.com";
  const appId = "A73033C9-9473-4F00-8873-C91B67EEA0F4";
  const restApiKey = "5B9272C5-AA16-45BD-B422-F21BB7E83DFF";
  const url = `${apiUrl}/${appId}/${restApiKey}`;

  return await axios.post(`${url}/users/login`, {
    login: email,
    password: password,
  });
}
