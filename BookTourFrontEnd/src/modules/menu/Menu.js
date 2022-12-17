import { Link } from "react-router-dom";

import { IconBooking, IconMyProfile, IconSigout } from "@/icon/IconMenu";
import { useDispatch } from "react-redux";
import TagMenu from "~/components/tag/TagMenu";
import WrapperMenu from "~/components/wrapper/WrapperMenu";
import { authLogOut } from "~/sagas/auth/auth-slice";

const MENU_ITEMS = [
  {
    icon: <IconMyProfile />,
    children: "My Profile",
    url: "/profile",
  },
  {
    icon: <IconBooking />,
    children: "Manage Booking",
    url: "/manage-booking",
  },
  {
    icon: <IconSigout />,
    children: "Sign out",
    url: "/logout",
  },
];
const Menu = () => {
  const dispatch = useDispatch();
  return (
    <WrapperMenu>
      {MENU_ITEMS.map((item, index) => {
        if (item.url === "/logout") {
          return (
            <button key={item.children} onClick={() => dispatch(authLogOut())}>
              <TagMenu icon={item.icon}>{item.children}</TagMenu>
            </button>
          );
        }
        return (
          <Link key={index} to={item.url}>
            <TagMenu icon={item.icon} onClick={item.onClick}>
              {item.children}
            </TagMenu>
          </Link>
        );
      })}
    </WrapperMenu>
  );
};

export default Menu;
