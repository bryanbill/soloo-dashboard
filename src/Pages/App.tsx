import React from "react";
import { AppWrapper, Dashboard, Header, Sidebar } from "../Components";
import { Footer } from "../Components/Footer";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Sidebar />
      <Dashboard />
    </AppWrapper>
  );
}

export default App;
