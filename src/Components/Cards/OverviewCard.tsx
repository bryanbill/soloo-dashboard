export const OverviewCard = () => {
  return (
    <div className="flex relative w-full   h-52 bg-cover bg-center group rounded-lg overflow-hidden  shadow-xl transition duration-300 ease-in-out ">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out"></div>
      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
        <div>
          <div className="text-white text-lg flex space-x-2 items-center">
            <div className="bg-white rounded-md p-2 flex items-center">
              <i className="fas fa-storage fa-sm text-yellow-300"></i>
            </div>
            <p>Storage</p>
          </div>
          <h3 className="text-white text-3xl mt-2 font-bold">120Gb</h3>
          <h3 className="text-white text-lg mt-2 text-yellow-100 ">26% Used</h3>
        </div>
      </div>
    </div>
  );
};
