"use client";

import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { RegisterSchema } from "../../validation/registerSchema";
import { RegisterApi } from "@/api/auth/registerApi";

export function UseRegisterMutation(getValues: () => RegisterSchema) {
  const router = useRouter();

  const { mutate: registerMutation, isPending } = useMutation({
    mutationFn: async () => {
      const { email, password } = getValues();
      await RegisterApi({email,password})
    },
    onSuccess(res) {
      toast.success("registration successfull");
      router.push("/admin/login");
    },
    onError(error) {
      if (isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    },
  });

  return { registerMutation, isPending };
}
