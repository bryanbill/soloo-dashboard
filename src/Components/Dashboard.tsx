import {
  ConnectDeviceCard,
  InfoCard,
  OverviewCard,
  ProfileCard,
  UploadCard,
  UserAppsCard,
  WalletPreviewCard,
} from ".";

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-2 bg-grey-200 h-full">
      <UserAppsCard />
      <ProfileCard />
      <UploadCard />
      <ConnectDeviceCard />
      <WalletPreviewCard />
      <OverviewCard />
      <InfoCard />
    </div>
  );
};
