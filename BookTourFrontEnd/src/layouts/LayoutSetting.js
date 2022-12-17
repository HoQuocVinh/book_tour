import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { Outlet, useNavigate } from "react-router-dom";

import { ErrorBoundary } from "@/common";
import { Footer, Header } from "~/modules/partials";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LayoutSetting = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.email) navigate("/sign-in");
  }, [navigate, user]);

  if (!user || !user.email) return null;

  return (
    <div className="wrapper">
      <Header />
      <div className="dark:bg-grayScale-c1 bg-[#FAFAFB]">
        <div className="container mx-auto pb-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

LayoutSetting.propTypes = {
  title: PropTypes.string,
};

export default withErrorBoundary(LayoutSetting, {
  FallbackComponent: ErrorBoundary,
});
