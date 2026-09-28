"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginSchema,
  loginSchema,
} from "@/features/admin/validation/loginSchema";
import { UseLoginMutation } from "@/features/admin/login/hooks/useLoginMutation";

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { loginMutation, isPending } = UseLoginMutation(getValues);

  return (
    <>
      <div className="h-max w-[65vh] bg-[#ffff] rounded-2xl shadow-lg p-12">
        <form onSubmit={handleSubmit(() => loginMutation())}>
          <h1 className="font-bold text-2xl">Administrative Login</h1>
          <p className="text-sm">
            Please enter your credentials to access the catalog.
          </p>

          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-full"
              placeholder="librarian@libradesk.edu"
              {...register("email")}
            />
            <p className="label text-red-400">{errors?.email?.message}</p>
          </fieldset>

          <fieldset className="fieldset w-full">
            <div className="flex justify-between">
              <legend className="fieldset-legend">Password</legend>
              <a href="">
                <p className="text-sm text-blue-500 hover:underline">forgot?</p>
              </a>
            </div>

            <input
              type="password"
              className="input w-full"
              placeholder="••••••••"
              {...register("password")}
            />
            <p className="label text-red-400">{errors?.password?.message}</p>
          </fieldset>

          <div className="flex gap-3 mt-5">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-sm"
            />

            <p className="label tabs-xs">Remember this station for 30 days</p>
          </div>

          <button
            disabled={isPending}
            className="btn bg-[#0967C2] text-white border-[#0059b3] mt-5 w-full"
          >
            Login to Dashboard
          </button>
        </form>

        <button className="btn bg-green-500 hover:bg-green-600 text-white border-green-400 mt-5 w-full">
          <a href="/admin/register">Sign Up</a>
        </button>
      </div>
    </>
  );
}
