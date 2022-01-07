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
    <div data-theme="dark" className="container">
      {/* <UserAppsCard />
      <ProfileCard />
      <UploadCard />
      <ConnectDeviceCard />
      <WalletPreviewCard />
      <OverviewCard />
      <InfoCard /> */}
      <div className="h-full pl-2  mt-14  md:ml-52 ml-28 bg-grey-200">
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
          <div className="flex  rounded-xl w-5/6 flex-row justify-between items-center bg-primaryDark text-white h-52">
            <div className="flex flex-col my-4 pl-6 h-28 w-2/6">
              <div className="text-semibold font-lg">
                Currently Active Devices
              </div>
              <div className="mt-4 font-normal">23</div>
              <button
                className="mt-4 btn btn-outline"
                onClick={() => window.location.assign("#modal")}
              >
                Configure
              </button>
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
          {/* Modal Container */}
          <div id="modal" className="modal">
            <div data-theme="light" className="modal-box">
              <p>
                Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
                adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla
                ea quasi eligendi. Saepe velit autem minima.
              </p>
              <div className="modal-action">
                <a href="#" className="btn btn-primary">
                  Accept
                </a>
                <a href="/" className="btn">
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End of Overview */}

        {/* Stats */}
        <div className="flex w-full mt-4 justify-between">
          <div className="font-bold text-2xl">Stats Info.</div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="m-1 btn">
              <i className="fas fa-calendar-week"></i>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>First Quarter</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div data-theme="light" className="w-full shadow stats">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-primaryMaroon">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-info">
              <div className="avatar online">
                <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                  <img
                    src="/tailwind-css-component-profile-5@56w.png"
                    alt="Avatar Tailwind CSS Component"
                    className="mask mask-squircle"
                  />
                </div>
              </div>
            </div>

            <div className="stat-title">Tasks done</div>
            <div className="stat-value">86%</div>
            <div className="stat-desc text-info">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};
