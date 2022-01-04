export const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 bg-white h-full">
      <div className="flex flex-col  md:flex-row">
        <div className="flex flex-row">
          <div className="grow bg-indigo-400">
            <p className="text-xl bold">Hello, John Doe</p>
          </div>

          <div className="grow h-14 items-center justify-center">
            <div className="">Something here!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
