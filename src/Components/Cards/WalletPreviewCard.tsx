export const WalletPreviewCard = () => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4 w-80">
      <div className="flex space-x-6 items-center">
        <img
          src="https://www.nicepng.com/png/detail/395-3955418_paypal-icon-png.png"
          className="w-auto h-12"
        />
        <div>
          <p className="font-semibold text-base">PayPal</p>
          <p className="font-semibold text-xs text-gray-400">
            Payment Collected
          </p>
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <div className="bg-yellow-200 rounded-md p-2 flex items-center">
          <p className="text-yellow-600 font-semibold text-xs">-C4,678</p>
        </div>
      </div>
    </div>
  );
};
