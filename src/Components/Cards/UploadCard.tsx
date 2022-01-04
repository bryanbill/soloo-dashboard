export const UploadCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-xl mt-4 w-80">
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/upload-social-media-post-4291893-3569926.png"
          className="w-auto h-40 rounded-lg"
        />
        <p className="font-semibold text-xl mt-1">Upload Data</p>
        <p className="font-semibold text-sm text-gray-400 text-center">
          Make your data as zip file <br />
          and drag here
        </p>
        <button className=" mt-4 bg-indigo-600 hover:bg-indigo-700 shadow-xl text-white font-bold py-2 px-4 rounded">
          Upload Now
        </button>
      </div>
    </div>
  );
};
