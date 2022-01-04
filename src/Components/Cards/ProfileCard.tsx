export const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-xl w-80 ">
      <div className="flex flex-col justify-center items-center">
        <div className="w-32 h-32 rounded-full bg-gray-300 border-2 border-white mt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU"
            className="rounded-full w-auto"
          />
        </div>
        <p className="font-semibold text-xl mt-1">John Cena</p>
        <p className="font-semibold text-base text-gray-400">No Future</p>

        <div className="relative  p-4 rounded-lg shadow-xl w-full bg-cover bg-center h-32 mt-4 bg-indigo-400">
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div>
              <h3 className="text-center text-white text-lg">Total Income</h3>
              <h3 className="text-center text-white text-3xl mt-2 font-bold">
                RM 2000.00
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
