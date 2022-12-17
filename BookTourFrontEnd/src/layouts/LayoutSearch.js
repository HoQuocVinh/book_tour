import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "~/modules/partials";

const LayoutSearch = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutSearch;
