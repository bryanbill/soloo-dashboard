import React from "react";
import { Dashboard, Header, Sidebar } from "../Components";
import { Footer } from "../Components/Footer";

function App() {
  return (
    <div className="flex flex-row  min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <Header />
        <Dashboard />
        <Footer />
      </main>
    </div>
  );
}

export default App;
