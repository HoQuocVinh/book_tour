import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classNames from "~/utils/classNames";

const LayoutAuth = ({ title, heading, children, textCenter }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (user && user.email) return null;
  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  // useEffect(() => {
  //   if (user && user.email) navigate("/");
  //   document.title = "TripGuide";
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

  // if (user && user.email) return null;

  return (
    <div className="relative isolate w-full bg-[#FCFCFD] px-6 pt-6 pb-14 font-Epilogue dark:bg-dark-primary lg:min-h-screen lg:px-10 lg:pt-10 lg:pb-64">
      {/* <img
        srcSet={darkMode ? "/ellipse-dark.png 2x" : "/ellipse.png 2x"}
        alt="bg"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[-1] hidden w-full lg:block"
      /> */}
      <div className="container mx-auto ">
        <img
          srcSet="/bg-ellipse-light.png 2x"
          alt="bg"
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[-1] hidden w-full lg:block"
        />
        <Link to="/" className="mb-5 inline-block lg:mb-16">
          <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        </Link>
        <div className="mx-auto w-full max-w-[556px] rounded-xl bg-white px-5 py-8 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)] dark:bg-dark-secondary lg:px-16 lg:py-12">
          <h1
            className={classNames(
              " dark:text-white lg:text-xl",
              textCenter
                ? "mb-2 text-left text-xl font-bold lg:mb-5 lg:text-2xl"
                : "mb-1 text-center text-lg font-semibold lg:mb-3"
            )}
          >
            {heading}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
