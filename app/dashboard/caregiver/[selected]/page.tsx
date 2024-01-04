"use client";

import ContractPage from "@/components/ui/dashboard/pages/caregiver/contract";
import EventsPage from "@/components/ui/dashboard/pages/caregiver/events";
import MessagesPage from "@/components/ui/dashboard/pages/caregiver/messages";
import PaymentPage from "@/components/ui/dashboard/pages/caregiver/payment";
import RecommendationsPage from "@/components/ui/dashboard/pages/caregiver/recommendations";
import ReportPage from "@/components/ui/dashboard/pages/caregiver/report";
import ServicesPage from "@/components/ui/dashboard/pages/caregiver/services";
import SettingPage from "@/components/ui/dashboard/pages/caregiver/settings";
import TimesheetPage from "@/components/ui/dashboard/pages/caregiver/timesheet";
import ApplicationPage from "@/components/ui/dashboard/pages/caregiver/application";
import ClientProfilePage from "@/components/ui/dashboard/pages/caregiver/client_profile";
import HelpSupportPage from "@/components/ui/dashboard/pages/caregiver/help/support";
import AppUsagePage from "@/components/ui/dashboard/pages/caregiver/appusage";
import PrivacyConcernPage from "@/components/ui/dashboard/pages/caregiver/privacy_concern";
import HelpCenterPage from "@/components/ui/dashboard/pages/caregiver/help/center";
import DashboardPage from "@/components/ui/dashboard/pages/caregiver/home";

interface sidebarItem {
  pathname: string;
  component: any;
}

const sidebarLinks: sidebarItem[] = [
  {
    pathname: "",
    component: <DashboardPage />,
  },
  {
    pathname: "recommendations",
    component: <RecommendationsPage />,
  },
  // {
  //   name: 'Care Plan',
  //   path: '/careplan',
  // },
  {
    pathname: "payment",
    component: <PaymentPage />,
  },
  {
    pathname: "events",
    component: <EventsPage />,
  },
  {
    pathname: "messages",
    component: <MessagesPage />,
  },
  {
    pathname: "timesheet",
    component: <TimesheetPage />,
  },
  {
    pathname: "reports",
    component: <ReportPage />,
  },
  {
    pathname: "services",
    component: <ServicesPage />,
  },
  {
    pathname: "contract",
    component: <ContractPage />,
  },
  {
    pathname: "application",
    component: <ApplicationPage />,
  },
  {
    pathname: "support",
    component: <HelpSupportPage />,
  },
  {
    pathname: "center",
    component: <HelpCenterPage />,
  },
  {
    pathname: "settings",
    component: <SettingPage />,
  },
  {
    pathname: "client_profile",
    component: <ClientProfilePage />,
  },
  {
    pathname: "appusage",
    component: <AppUsagePage />,
  },
  {
    pathname: "privacy_concern",
    component: <PrivacyConcernPage />,
  },
  // {
  //   pathname: "service-overview",
  //   component: <ServiceOverviewPage />,
  // },
];

export default function Page({ params }: { params: { selected: string } }) {
  const SelectedPage = () => {
    const target = sidebarLinks.find(
      (item) => item.pathname === params.selected
    );
    return target?.component;
  };

  return <SelectedPage />;
}
