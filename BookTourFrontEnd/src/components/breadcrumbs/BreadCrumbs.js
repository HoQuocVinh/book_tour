import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { IconArrowRight } from "../icon/IconProfilePage";
const CustomPropsBreadcrumb = ({ someProp }) => {
  return (
    <div className="flex items-center gap-3">
      <IconArrowRight />
      <span>{someProp}</span>
    </div>
  );
};
const routes = [
  {
    path: "/profile",
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: "Profile" },
  },
];
const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </>
  );
};

export default BreadCrumbs;
