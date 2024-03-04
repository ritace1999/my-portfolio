import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { LuWrench } from "react-icons/lu";
import { MdContactPage } from "react-icons/md";
import Link from "next/link";

const NavBar = ({ children }) => {
  const menuItems = [
    { name: "Home", url: "/", icon: <CiHome /> },
    { name: "About", url: "/about", icon: <CiUser /> },
    { name: "Portfolio", url: "/portfolio", icon: <FaCode /> },
    { name: "Skills", url: "/skills", icon: <LuWrench /> },
    { name: "Contact", url: "/contact", icon: <MdContactPage /> },
  ];

  return (
    <div className="flex w-[96vw] bg-white py-3 px-12 mx-auto my-6 justify-between items-center rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Link
        href="/"
        className="animate-pulse text-black font-bold hover:text-white"
      >
        PORTFOLIO
      </Link>
      <header className="flex gap-8">
        {menuItems.map((item, i) => (
          <Link href={item.url} key={i}>
            <div
              className={`flex gap-1 justify-center items-center px-3 py-3 font-bold  group relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-x-110 hover:text-white bg-white bg-opacity-20 backdrop-blur-md rounded-lg`}
            >
              <span className="text-xl">{item.icon}</span>
              <p className="text-sm">{item.name}</p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
            </div>
          </Link>
        ))}
      </header>
      {children}
    </div>
  );
};

export default NavBar;
