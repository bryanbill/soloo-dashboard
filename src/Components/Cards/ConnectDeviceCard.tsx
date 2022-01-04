export const ConnectDeviceCard = () => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4 w-96">
      <div className="flex space-x-6 items-center">
        <img
          src="https://i.pinimg.com/originals/25/0c/a0/250ca0295215879bd0d53e3a58fa1289.png"
          className="w-auto h-24 rounded-lg"
        />
        <div>
          <p className="font-semibold text-base">Connect Device</p>
          <p className="font-semibold text-sm text-gray-400">
            Autorize device for transfer
          </p>
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <div className="bg-indigo-300 rounded-md p-2 flex items-center">
          <i className="fas fa-plus fa-sm text-black"></i>
        </div>
      </div>
    </div>
  );
};
