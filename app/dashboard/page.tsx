"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    redirect("/dashboard/caregiver");
  }, []);
  return <></>;
};

export default Redirect;
