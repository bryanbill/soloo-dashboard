import {
  AppStack,
  ConnectDeviceCard,
  InfoCard,
  OverviewCard,
  ProfileCard,
  UploadCard,
  UserAppsCard,
  UsersTable,
  WalletPreviewCard,
} from ".";

export const Dashboard = () => {
  return (
    <div className="container">
      {/* <UserAppsCard />
      <ProfileCard />
      <UploadCard />
      <ConnectDeviceCard />
      <WalletPreviewCard />
      <OverviewCard />
      <InfoCard /> */}
      <div className="h-full pl-2  mt-14 mb-10 md:ml-52 ml-28 bg-grey-200">
        <div className="flex items-center  justify-between md:flex-row flex-col">
          {/* Greetings */}
          <div className="flex flex-col justify-between">
            <div className="text-black font-bold text-md">
              <div className="text-black font-bold text-3xl">
                Good Evening John!
              </div>
              <span className="font-bold text-xl">|</span>$45,000.00
            </div>
          </div>

          <ConnectDeviceCard />
        </div>

        <div className="flex items-center w-full justify-between mt-2">
          <div className="flex w-1/6">
            <OverviewCard />
          </div>
          <div
            data-theme="dark"
            className="flex  rounded-xl w-5/6 flex-row justify-between items-center bg-primaryDark text-white h-52"
          >
            <div className="flex flex-col my-4 pl-6 h-28 w-2/6">
              <div className="text-semibold font-lg">
                Currently Active Devices
              </div>
              <div className="mt-4 font-normal">23</div>
              <button className="mt-4 btn btn-outline">Configure</button>
            </div>
            <div className="my-4 divider divider-vertical"></div>
            <div className="flex flex-col my-4 h-28 w-2/6">
              <div className="text-semibold font-lg">
                Currently Active Devices
              </div>
              <div className="mt-4 font-normal">23</div>
              <button className="mt-4 btn btn-outline">Configure</button>
            </div>
            <div className="my-4 divider divider-vertical"></div>
            <div className="flex flex-col pr-6 my-4 h-28 w-2/6">
              <div className="text-semibold font-lg">
                Currently Active Devices
              </div>
              <div className="mt-4 font-normal">23</div>
              <button className="mt-4 btn btn-outline">Configure</button>
            </div>
          </div>
        </div>
        {/* End of Overview */}

        {/* Stats */}
       
      </div>
    </div>
  );
};
