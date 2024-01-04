"use client";

import ContractPage from "@/components/ui/dashboard/pages/client/contract";
import CaregiverManagementPage from "@/components/ui/dashboard/pages/client/caregivermanagement";
import Events from "@/components/ui/dashboard/pages/client/events/Events";
import MessagesPage from "@/components/ui/dashboard/pages/client/messages";
import PaymentPage from "@/components/ui/dashboard/pages/client/payment";
import RecommendationsPage from "@/components/ui/dashboard/pages/client/recommendations";
import ApplicationPage from "@/components/ui/dashboard/pages/client/application";
import HelpSupportPage from "@/components/ui/dashboard/pages/client/help/support";
import AppUsagePage from "@/components/ui/dashboard/pages/client/appusage";
import PrivacyConcernPage from "@/components/ui/dashboard/pages/client/privacy_concern";
import HelpCenterPage from "@/components/ui/dashboard/pages/client/help/center";
import DashboardPage from "@/components/ui/dashboard/pages/client/home";
import CareplanPage from "@/components/ui/dashboard/pages/client/careplan";
import CaregiverProfilePage from "@/components/ui/dashboard/pages/client/caregiver_profile";
import TimesheetPage from "@/components/ui/dashboard/pages/client/timesheet";
import ReportPage from "@/components/ui/dashboard/pages/client/report";
import ServicesPage from "@/components/ui/dashboard/pages/client/services";
import SettingPage from "@/components/ui/dashboard/pages/client/settings";

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
  {
    pathname: "careplan",
    component: <CareplanPage />,
  },
  {
    pathname: "payment",
    component: <PaymentPage />,
  },
  {
    pathname: "events",
    component: <Events />,
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
    pathname: "caregivermanagement",
    component: <CaregiverManagementPage />,
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
    pathname: "caregiver_profile",
    component: <CaregiverProfilePage />,
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
