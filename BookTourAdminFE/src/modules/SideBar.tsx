import { Link } from 'react-router-dom';
import {
  IconBlog,
  IconCategory,
  IconCourse,
  IconDashboard,
  IconUser,
} from '~/components/icon/Icon';
import LogoDefault from '~/components/logo/LogoDefault';

const Menus = [
  { title: 'Dashboard', link: '/admin' },
  { title: 'Users', link: 'users', icon: <IconUser /> },
  {
    title: 'Locations',
    link: 'locations',
    icon: <IconBlog />,
  },
  { title: 'Tours', link: 'tours', icon: <IconCourse /> },
  { title: 'Bookings', link: 'bookings', icon: <IconCategory /> },
];

const SideBar = () => {
  return (
    <div className='bg-white h-fit rounded-xl m-4 w-20 lg:w-60 fixed top-0'>
      <div className='flex justify-center p-10'>
        <LogoDefault />
      </div>
      <hr className='mx-6 border-1.5 border-gray-c2' />
      <div className='px-6'>
        <ul className='pt-2'>
          {Menus.map((menu) => (
            <Link to={menu.link} key={menu.title} className='flex items-center'>
              <li
                key={menu.title}
                className='text-black text-sm flex-1 flex font-OpenSans items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-c2 rounded-md mt-2 justify-between'
              >
                <span className='text-2l block float-left'>
                  {menu.icon ? menu.icon : <IconDashboard />}
                </span>
                <span className='text-base font-OpenSans font-medium flex-1 duration-200'>
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <hr className='mx-6 border-1.5 border-gray-c2' />
      <div className='p-6 flex flex-col'></div>
    </div>
  );
};

export default SideBar;
