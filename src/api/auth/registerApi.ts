import { RegisterSchema } from "@/features/admin/validation/registerSchema";
import axios from "axios";


export async function RegisterApi({email, password}: RegisterSchema) {
  const apiUrl = "https://api.backendless.com";
  const appId = "A73033C9-9473-4F00-8873-C91B67EEA0F4";
  const restApiKey = "5B9272C5-AA16-45BD-B422-F21BB7E83DFF";
  const url = `${apiUrl}/${appId}/${restApiKey}`;

  return await axios.post(`${url}/users/register`, {
        email,
        password,
      });
}