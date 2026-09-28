"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { LoginSchema } from "../../validation/loginSchema";
import { useRouter } from "next/navigation";
import { loginApi } from "@/api/auth/loginApi";
import { useAuthStore } from "@/stores/useAuthStore";

export function UseLoginMutation(getValues: () => LoginSchema) {
  const router = useRouter();
  const { setUserAuthStore } = useAuthStore();

  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: async () => {
      const { email, password } = getValues();
      return await loginApi({ email, password });
    },
    onSuccess(res: any) {
      toast.success("autentification user successfull");
      setUserAuthStore(
        res?.data?.username,
        res?.data?.email,
        res?.data?.objectId,
      );
      router.push("/admin/book-management");
    },
    onError(error: any) {
      toast.error(error?.response?.data?.message || "Terjadi kesalahan");
    },
  });

  return { loginMutation, isPending };
}
