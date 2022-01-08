import { ConnectDeviceCard } from "..";

export const GreetingWidget = () => {
  return (
    <div className="flex w-full md:items-center justify-between flex-col md:flex-row">
      {/* Greetings */}
      <div className="flex flex-row md:w-4/6 md:flex-col justify-between text-black font-bold text-md">
        <div className="">
          <div className="text-black font-bold text-3xl">
            Good Evening John!
          </div>
        </div>
        <div>
          <span className="font-bold text-xl invisible md:visible">|</span>
          $45,000.00
        </div>
      </div>

      <div className="flex w-full md:w-2/6">
        <ConnectDeviceCard />
      </div>
    </div>
  );
};
