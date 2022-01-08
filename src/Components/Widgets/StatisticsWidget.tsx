import { AvatarStack } from "..";

export const StatisticsWidget = () => {
  return (
    <>
      <div className="flex w-full my-2 items-center justify-between">
        <div className="font-bold text-2xl">Statistics</div>

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
              <a>Second Quarter</a>
            </li>
            <li>
              <a>Third Quarter</a>
            </li>
            <li
              onClick={() => {
                //set the value clicked
              }}
            >
              <a id="last-quarter">Last Quarter</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        data-theme="light"
        className="flex w-full shadow stats flex-col md:flex-row"
      >
        <div className="stat md:w-2/6 w-full">
          <div className="stat-figure text-primary">
            <AvatarStack />
          </div>
          <div className="stat-title">Connections</div>
          <div className="stat-value">25.6K</div>
          <div className="stat-desc">4+ this month</div>
        </div>
        <div className="stat md:w-2/6 w-full">
          <div className="stat-figure text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat md:w-2/6 w-full">
          <div className="stat-figure text-info">
            <div className="avatar online">
              <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                <img
                  src="https://i.pravatar.cc/300
                    "
                  alt="Avatar Tailwind CSS Component"
                  className="mask mask-squircle"
                />
              </div>
            </div>
          </div>

          <div className="stat-title">Tasks done</div>
          <div className="stat-value">86%</div>
          <div className="stat-desc ">31 tasks remaining</div>
        </div>
      </div>
    </>
  );
};
