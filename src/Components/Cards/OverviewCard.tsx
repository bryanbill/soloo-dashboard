import { useState } from "react";

export const OverviewCard = () => {
  let initialValue = {
    storage: 20,
    used: 26,
  };

  let [storage, setStorage] = useState(initialValue);

  const incrementStorage = () => {
    setStorage({
      storage: initialValue.storage + 20,
      used: (initialValue.used + 40 / initialValue.used),
    });
  };
  return (
    <div className="flex relative w-full   h-52 bg-cover bg-center group rounded-lg overflow-hidden  shadow-xl transition duration-300 ease-in-out ">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out"></div>
      <div className="flex relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-between">
        <div>
          <div className="text-white text-lg flex space-x-2 items-center">
            <div className="bg-white rounded-md p-2 flex items-center">
              <i className="fas fa-hdd fa-sm text-primary"></i>
            </div>
            <p>Storage</p>
          </div>
          <h3 className="text-white text-3xl mt-2 font-bold">
            {storage.storage}
          </h3>
          <h3 className="text-white text-lg mt-2 text-yellow-100 ">
            {storage.used}% Used
          </h3>
        </div>
        <div className="md:invisible visible">
          <div className="btn btn-transparent" onClick={incrementStorage}>
            Buy More
          </div>
        </div>
      </div>
    </div>
  );
};
