import { OverviewCard } from "..";

export const Overview = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-between mt-2">
      <div className="flex w-full md:w-1/6">
        <OverviewCard />
      </div>
      <div className="flex md:ml-4  shadow-xl rounded-xl w-full md:w-5/6 flex-row justify-between items-center bg-white text-black md:h-52 h-max">
        <div className="flex flex-col items-start my-4 pl-6 h-28 w-2/6">
          <div className="text-semibold font-lg">Currently Active Devices</div>
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
          <div className="text-semibold font-lg">Currently Active Devices</div>
          <div className="mt-4 font-normal">23</div>
          <button className="mt-4 btn btn-outline">Configure</button>
        </div>
        <div className="my-4 divider divider-vertical"></div>
        <div className="flex flex-col pr-6 my-4 h-28 w-2/6">
          <div className="text-semibold font-lg">Currently Active Devices</div>
          <div className="mt-4 font-normal">23</div>
          <button className="mt-4 btn btn-outline">Configure</button>
        </div>
      </div>
    </div>
  );
};
