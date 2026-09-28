'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchema,
  registerSchema,
} from "@/features/admin/validation/registerSchema";
import { UseRegisterMutation } from "@/features/admin/register/hooks/useRegisterMutation";


export default function FormRegister () {
  const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
    } = useForm<RegisterSchema>({
      resolver: zodResolver(registerSchema),
    });

  const {registerMutation, isPending} =UseRegisterMutation(getValues)
  

  return(
    <>
    <form
          className="h-max w-[65vh] bg-[#ffff] rounded-2xl shadow-lg p-12"
          onSubmit={handleSubmit(() => registerMutation())}
        >
          <h1 className="font-bold text-2xl">Administrative Registration</h1>
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
            Registration
          </button>
        </form>
    </>
  )
}
