"use client";
import { useAuthStore } from "@/stores/useAuthStore";

export function NavbarSection() {
  const { username, email, } = useAuthStore();

  return (
    <>
      <div className="navbar bg-[#F7F9FB] flex justify-end shadow-sm">
        <div className="flex gap-3 mr-10 items-center">
          <span className="cursor-pointer">
            <img src="/lonceng-icon.svg" alt="lonceng" />
          </span>
          <span className="cursor-pointer">
            <img src="/tandatanya-icon.svg" alt="tanda tanya" />
          </span>
          <span className="text-black">
            <img src="/Vertical Divider.svg" alt="|" />
          </span>
          <div className="flex">
            <div className="flex flex-col">
              <h1 className="font-bold text-[#191C1E]">`{username}</h1>
              <p className="text-sm font-body text-[#00714D]">{email}</p>
            </div>
            <span className="cursor-pointer">
              <img src="/Librarian Profile.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
