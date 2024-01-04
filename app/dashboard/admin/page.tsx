"use client";

import DashboardPage from "@/components/ui/dashboard/pages/admin/home";

interface sidebarItem {
  pathname: string;
  component: any;
}

export default function Page({ params }: { params: { selected: string } }) {
  return <DashboardPage />;
}
