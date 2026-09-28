import { FormLogin } from "@/features/admin/login/components/FormLogin";
import { ToastContainer } from "react-toastify";

export default function LoginPage() {
  return (
    <>
      <div
        id="featLogin"
        className="h-screen bg-[#F7F9FB] flex justify-center items-center"
      >
        <FormLogin />
      </div>

      <ToastContainer />
    </>
  );
}
