"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    redirect("/auth/selectoption");
  }, []);
  return <></>;
};

export default Redirect;
