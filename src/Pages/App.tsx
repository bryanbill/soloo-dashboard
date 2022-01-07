import React from "react";
import {
  Dashboard,
  Header,
  Sidebar,
} from "../Components";
import { Footer } from "../Components/Footer";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col flex-auto flex-shrink-0 antialiased bg-backgroundColor dark:bg-gray-700 text-black dark:text-white font-srif">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
