import { ProfileCard, UserAppsCard } from ".";

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-2 bg-grey-200 h-full">
      <UserAppsCard />
      <ProfileCard />
    </div>
  );
};
