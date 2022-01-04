export const InfoCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-xl mt-4 w-max">
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://media.karousell.com/media/photos/products/2021/4/16/kajang_3xxk3xxk3xxk22x70_4r3b__1618542693_a779ef2b_progressive.jpg"
          className="w-full h-40 rounded-lg"
        />
      </div>
      <p className="font-semibold text-lg mt-1 text-left">Traffic Point</p>
      <p className="font-semibold text-sm text-gray-400">Kajang,Selangor MY</p>
      <div className="flex space-x-2 text-gray-400 items-center mt-2">
        <i className="fas fa-map-marker-alt"></i>
        <p className="font-semibold text-sm text-gray-400">5km</p>
      </div>
    </div>
  );
};
