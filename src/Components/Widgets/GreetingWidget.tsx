import { useEffect } from "react";
import { useState } from "react";
import { ConnectDeviceCard } from "..";
import { getUser } from "../../api/indext";
import { getWallet } from "../../api/wallet/getWallet";
import { User, Wallet } from "../../types";

export const GreetingWidget = () => {
  const [user, setUser] = useState({} as User);
  const [wallet, setWallet] = useState({} as Wallet);
  useEffect(() => {
    getUser().then((userData) => setUser(userData));
   
  }, []);
  if (!user || !wallet) return null;
  return (
    <div className="flex w-full md:items-center justify-between flex-col md:flex-row">
      {/* Greetings */}
      <div className="flex flex-row md:w-4/6 md:flex-col justify-between text-black font-bold text-md">
        <div className="">
          <div className="text-black font-bold text-3xl">
            Good Evening {user.name}!
          </div>
        </div>
        <div>
          <span className="font-bold text-xl invisible md:visible">|</span>$
          {wallet.amount}.00
        </div>
      </div>

      <div className="flex w-full md:w-2/6">
        <ConnectDeviceCard id={"user.id.toString()"} />
      </div>
    </div>
  );
};
