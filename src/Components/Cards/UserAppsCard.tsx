export const UserAppsCard = () => {
  return (
    <div className="pt-2 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6">
      <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between w-80">
        <div className="flex space-x-6 items-center">
          <div className="relative inline-flex">
            <i className="fa-lg fas fa-sort-down w-2 h-2 absolute top-0 right-0 mx-5 my-2 pointer-events-none text-white"></i>
            <select className="border-white rounded-xl text-white  pl-5 pr-10 bg-pink-600 hover:bg-pink-700 focus:outline-none appearance-none">
              <option>All</option>
            </select>
          </div>
          <div className="flex space-x-2 items-center">
            <p className="font-semibold">John Cena</p>
            <div className="bg-gray-800 rounded-md p-2 flex items-center">
              <i className="fab fa-github-alt fa-sm text-white"></i>
            </div>
          </div>
        </div>
        <p className="font-semibold text-gray-400">08:02 PM</p>
      </div>
    </div>
  );
};
