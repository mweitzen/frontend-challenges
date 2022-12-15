import MobileImage from "../images/image-web-3-mobile.jpg";
import DesktopImage from "../images/image-web-3-desktop.jpg";
//
import Navigation from "../components/NewsHomePage/Navigation";
import NewStories from "../components/NewsHomePage/NewStories";
import TopStories from "../components/NewsHomePage/TopStories";

const NewsHomePage = () => {
  return (
    <div className="theme-news-page bg-default min-h-full">
      <div className="max-w-6xl mx-auto w-full p-4 lg:p-16">
        <Navigation />
        <div className="grid grid-cols-1 lg:grid-cols-3 my-4 gap-4">
          {/* HERO SECTION */}
          <div className="col-span-2">
            <img src={MobileImage} className="md:hidden" />
            <img src={DesktopImage} className="hidden md:block" />

            <div className="my-4 grid grid-cols-1 lg:grid-cols-2">
              <h2 className="mb-4 text-5xl font-bold leading-tighter">
                The Bright Future of Web 3.0?
              </h2>
              <div>
                <p className="text-muted text-[14px] leading-6">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>

                <button className="bg-primary hover:bg-black text-white uppercase text-xs font-semibold tracking-[4px] py-4 px-8 my-6">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <NewStories />
        </div>

        <TopStories />
      </div>
    </div>
  );
};

export default NewsHomePage;
