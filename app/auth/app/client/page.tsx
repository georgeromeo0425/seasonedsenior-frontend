"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    redirect("/auth/app/client/1");
  }, []);
  return <></>;
};

export default Redirect;
