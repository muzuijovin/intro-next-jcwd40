"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UseAuthStore {
  username: string;
  email: string;
  objectId: string;
  setUserAuthStore: (username: string, email: string, token: string) => void;
}

export const useAuthStore = create<UseAuthStore>()(
  persist(
    (set) => ({
      username: "",
      email: "",
      objectId: "",

      setUserAuthStore: (username, email, objectId) =>
        set({
          username,
          email,
          objectId,
        }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ objectId: state?.objectId }),
    },
  ),
);
