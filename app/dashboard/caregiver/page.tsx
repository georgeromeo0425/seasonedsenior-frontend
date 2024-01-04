"use client";

import DashboardPage from "@/components/ui/dashboard/pages/caregiver/home";

interface sidebarItem {
  pathname: string;
  component: any;
}

export default function Page({ params }: { params: { selected: string } }) {
  return <DashboardPage />;
}
