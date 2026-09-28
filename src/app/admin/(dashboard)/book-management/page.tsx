"use client";

import { useUsernameStore } from "@/stores/useUsernameStore";
import { useRef } from "react";

export default function BookManagementSection() {
  const { setUsernameValue } = useUsernameStore();
  const inputUsername = useRef<HTMLInputElement>(null);

  const handleSetUsername = () => {
    setUsernameValue(inputUsername?.current!.value);
  };
  return (
    <>
    <h1>book-management</h1>
      <input ref={inputUsername} type="text" placeholder="Type your username" />
      <button  className="btn btn-success" onClick={handleSetUsername}>set username</button>
    </>
  );
}
