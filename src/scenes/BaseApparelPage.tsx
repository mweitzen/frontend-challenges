import MobileHeroImg from "../images/hero-mobile.jpg";
import DesktopHeroImg from "../images/hero-desktop.jpg";
import Logo from "../images/ba-logo.svg";
//
import ArrowIcon from "../components/BaseApparel/ArrowIcon";

const BaseApparelPage = () => {
  return (
    <div className="theme-base-apparel bg-gradient-to-br from-[#ffffff] to-[#fff5f5] font-default md:h-full overflow-hidden">
      <header className="md:hidden p-8">
        <img src={Logo} />
      </header>
      <div className="flex flex-col md:flex-row-reverse h-full">
        <div className="w-full md:w-1/2">
          <picture>
            <source srcSet={DesktopHeroImg} media="(min-width: 768px)" />
            <img
              src={MobileHeroImg}
              className="w-full h-full object-cover object-top"
            />
          </picture>
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-12 my-auto">
          <header className="hidden md:block mb-36">
            <img src={Logo} />
          </header>
          <h1 className="my-8 text-4xl sm:text-6xl md:text-4xl lg:text-6xl uppercase tracking-[1rem] text-center md:text-start">
            <span className="text-primary font-light">We're</span>
            <br />
            coming
            <br />
            soon
          </h1>
          <p className="text-primary text-center md:text-start">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <span className="w-full flex border-primary border rounded-full my-12">
            <input
              placeholder="Email Address"
              className="ml-8 flex-1 bg-inherit"
            />
            <button className="bg-gradient-to-br from-[#f8bfbf] to-[#ee8c8c] rounded-full py-4 px-8">
              <ArrowIcon />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BaseApparelPage;
