import React from "react";
import {
  Dashboard,
  Header,
  HeaderTest,
  Sidebar,
  SidebarTest,
} from "../Components";
import { Footer } from "../Components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-backgroundColor dark:bg-gray-700 text-black dark:text-white">
      <HeaderTest />
      <SidebarTest />
      <Dashboard />
    </div>
  );
}

export default App;
