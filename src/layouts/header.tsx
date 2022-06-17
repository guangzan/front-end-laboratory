import { useState } from 'react';
import { Link } from 'umi';

interface navItem {
  title: string;
  path: string;
}

const navList: navItem[] = [
  {
    title: '首页',
    path: '/',
  },
  {
    title: '博客',
    path: '/posts',
  },
  {
    title: '项目',
    path: '/projects',
  },
  {
    title: '在线工具',
    path: '/tools',
  },
  {
    title: '软件',
    path: '/software',
  },
];

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center py-4 pl-8 pr-4 text-2xl text-gray-700">
        FE Laboratory
      </div>
    </Link>
  );
}

function Menu() {
  return (
    <nav className="flex flex-col items-center px-8 py-4 ml-auto bg-white">
      <ul className="flex items-center gap-2 <sm:flex-col">
        {navList.map((item, index) => (
          <Link to={item.path} key={index}>
            <li className="flex items-center px-3 py-2 text-gray-500 cursor-pointer hover:(text-gray-900)">
              <span v-if="typeof item.title == 'string'">{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

function MobileMenu(props: any) {
  return (
    <nav className="absolute top-12 flex flex-col items-center px-8 py-4 ml-auto bg-white">
      <ul className="flex items-center gap-2 <sm:flex-col">
        {navList.map((item, index) => (
          <Link to={item.path} key={index}>
            <li className="flex items-center px-3 py-2 text-gray-500 cursor-pointer hover:(text-gray-900)">
              <span v-if="typeof item.title == 'string'">{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

function MenuButton() {
  return (
    <div className="flex items-center p-8 sm:hidden">
      <div className="side-btn">
        <div className="side-btn-burger"></div>
      </div>
    </div>
  );
}

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function handleToggleMobileNav() {
    setShowMobileNav(!showMobileNav);
  }

  return (
    <header className="sticky top-0 flex flex-row items-stretch  bg-white z-30 opacity-90">
      <MenuButton />
      <Logo />
      <Menu />
      {showMobileNav && <MobileMenu />}
    </header>
  );
}

export default Header;
