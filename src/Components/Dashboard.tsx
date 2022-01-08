import { useState } from "react";
import {
  AppStack,
  ConnectDeviceCard,
  ConnectDeviceModal,
  CreateAppModal,
  DashboardWrapper,
  GreetingWidget,
  InfoCard,
  Overview,
  OverviewCard,
  ProfileCard,
  UploadCard,
  UserAppsCard,
  UsersTable,
  WalletPreviewCard,
} from ".";
import { AppListWidget } from "./Widgets/AppListWidget";

export const Dashboard = () => {
  return (
    <DashboardWrapper>
      <GreetingWidget />
      <Overview />
      <AppListWidget />
    </DashboardWrapper>
  );
};
