import FormRegister from "@/features/admin/register/components/FormRegister";
import { ToastContainer } from "react-toastify";

export default function RegisterPage() {
  return (
    <>
      <div
        id="featRegister"
        className="h-screen bg-[#F7F9FB] flex justify-center items-center"
      >
        <FormRegister/>
      </div>
      <ToastContainer />
    </>
  );
}
