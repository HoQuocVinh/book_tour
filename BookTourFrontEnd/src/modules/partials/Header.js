import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import classNames from "~/utils/classNames";
import Avt from "@/avt/Avt";
import { IconArrowDownSolid, IconUser } from "@/icon/IconHomePage";
import Logo from "@/logo/Logo";
import Notification from "@/notification/Notification";
import { WrapperFlex } from "~/components/common";
import Menu from "../menu/Menu";
import TippyTooltip from "../tippy/TippyTooltip";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [avatar, setAvatar] = useState(user?.avatar);
  const navigate = useNavigate();
  useEffect(() => {
    setAvatar(user?.avatar);
  }, [user?.avatar]);

  const handleRedirect = () => navigate("/profile");

  return (
    <div className="bg-white">
      <header className="header bg-white px-5 py-[30px] dark:bg-c2 lg:mx-auto lg:max-w-7xl lg:px-10 lg:py-5">
        <WrapperFlex
          spacing="4"
          className="lg:gap-10 2xl:container 2xl:mx-auto"
          center
        >
          <Logo />
          <WrapperFlex justify="end" flex1>
            <div className={classNames("flex items-center", !!user && "gap-4")}>
              {/* <Search /> */}
              {user ? (
                <WrapperFlex
                  className="header-right h-8 font-Roboto"
                  items="center"
                >
                  <Notification />
                  <div className="mr-5 h-full w-[1px] bg-c5 dark:bg-c3" />
                  <WrapperFlex spacing="3" items="center">
                    <div onClick={handleRedirect}>
                      <Avt
                        sx="default"
                        src={avatar ? avatar : "../none-avt.png"}
                        className="bg-c7"
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="inline-block select-none text-sm font-semibold">
                        {user.fullName}
                      </p>
                      <Tippy
                        interactive
                        delay={[0, 200]}
                        offset={[0, 10]}
                        moveTransition
                        render={(attrs) => (
                          <div
                            className="w-[238px] rounded-2xl"
                            tabIndex="-1"
                            {...attrs}
                          >
                            <Menu />
                          </div>
                        )}
                      >
                        <span className="cursor-pointer px-2 py-4 text-c3">
                          <IconArrowDownSolid />
                        </span>
                      </Tippy>
                    </div>
                  </WrapperFlex>
                </WrapperFlex>
              ) : (
                <TippyTooltip content="Login">
                  <span
                    className="cursor-pointer px-4 text-c4"
                    onClick={() => navigate("/sign-in")}
                  >
                    <IconUser />
                  </span>
                </TippyTooltip>
              )}
            </div>
          </WrapperFlex>
        </WrapperFlex>
      </header>
    </div>
  );
};

export default Header;
