import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "~/utils/classNames";
import Loading from "@/common/Loading";
const ButtonSubmitAuth = ({
  children,
  isLoading,
  className = "",
  ...props
}) => {
  const { to, href } = props;

  let Camp = "button";
  if (to) {
    props.to = to;
    Camp = Link;
  }
  if (href) {
    props.href = href;
    Camp = "a";
  }
  return (
    <Camp
      type="submit"
      className={classNames(
        "flex h-12 w-full select-none items-center justify-center rounded-lg bg-gradient-to-tr from-blue-300 to-blue-600 py-3 text-base font-semibold text-white shadow-[0px_20px_30px_rgba(20,_92,_230,_0.12)] disabled:pointer-events-none disabled:opacity-50",
        !!isLoading && "pointer-events-none opacity-50",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {!!isLoading ? <Loading /> : children}
    </Camp>
  );
};

ButtonSubmitAuth.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  props: PropTypes.any,
  className: PropTypes.string,
};

export default ButtonSubmitAuth;
