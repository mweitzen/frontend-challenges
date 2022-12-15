import { useState } from "react";
//
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import MenuClosedIcon from "./MenuClosedIcon";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="flex justify-between py-4 items-center">
      <Logo />
      <nav className="hidden md:flex space-x-8 text-[14px] text-muted">
        <a href="#" className="hover:text-primary">
          Home
        </a>
        <a href="#" className="hover:text-primary">
          New
        </a>
        <a href="#" className="hover:text-primary">
          Popular
        </a>
        <a href="#" className="hover:text-primary">
          Trending
        </a>
        <a href="#" className="hover:text-primary">
          Categories
        </a>
      </nav>
      <button className="md:hidden" onClick={() => setMobileOpen(true)}>
        <MenuIcon />
      </button>
      <div className={`${mobileOpen ? "absolute" : "hidden"}  inset-0`}>
        <div className=" absolute inset-0 bg-gray-700 opacity-60" />
        <div className="bg-white py-8 px-4 w-72 top-0 right-0 bottom-0 absolute">
          <span className="flex justify-end">
            <button onClick={() => setMobileOpen(false)}>
              <MenuClosedIcon />
            </button>
          </span>
          <ul className="pt-24 grid grid-rows-5 gap-8 text-lg">
            <li>
              <a href="#" onClick={() => setMobileOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMobileOpen(false)}>
                New
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMobileOpen(false)}>
                Popular
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMobileOpen(false)}>
                Trending
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMobileOpen(false)}>
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
