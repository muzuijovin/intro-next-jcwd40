'use client'
import { NavbarSection } from "@/components/navbar";
import { SidebarSection } from "@/components/sidebar";
import { useAuthStore } from "@/stores/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const {objectId, setUserAuthStore}= useAuthStore();

   // Session User (Ketika User Pernah Login)
  useQuery({
    queryFn: async () => {
      const res = await axios.post(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/961C60EC-92F0-449A-9F6C-16488E55BA91/users/login',
        { objectId },
      );
      setUserAuthStore(res?.data?.username, res?.data?.email, res?.data?.objectId);
      return res?.data;
    },
    queryKey: ['session-user', objectId],
    enabled: !!objectId,
  });

  return (
    <>
      <div className="grid grid-cols-[20%_80%]">
        <div
          id="sideBar"
          className="col-start-1 h-screen fixed left-0 top-0 w-[20%] bg-[#2036bd]"
        >
          <SidebarSection />
        </div>
        <div id="mainSection" className="h-max col-start-2">
          <div id="navbar" className="h-max">
            <NavbarSection />
          </div>
          <div id="content" className="h-max">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
