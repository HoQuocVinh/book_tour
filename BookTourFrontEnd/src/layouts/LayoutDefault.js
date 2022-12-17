import { withErrorBoundary } from "react-error-boundary";
import { Outlet, useNavigate } from "react-router-dom";

import ErrorBoundary from "@/common/ErrorBoundary";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Banner, Footer, Header } from "~/modules/partials";
const LayoutDefault = () => {
  // const { user } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user || !user.email) navigate("/sign-in");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [navigate, user]);
  // if (!user || !user.email) return null;

  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default withErrorBoundary(LayoutDefault, {
  FallbackComponent: ErrorBoundary,
});
