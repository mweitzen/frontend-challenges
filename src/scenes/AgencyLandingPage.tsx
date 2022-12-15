import Logo from "../components/AgencyLanding/Logo";
//
import ArrowDownIcon from "../components/AgencyLanding/ArrowDownIcon";
import HamburgerIcon from "../components/AgencyLanding/HamburgerIcon";
import FacebookIcon from "../components/AgencyLanding/FacebookIcon";
import InstagramIcon from "../components/AgencyLanding/InstagramIcon";
import TwitterIcon from "../components/AgencyLanding/TwitterIcon";
import PinterestIcon from "../components/AgencyLanding/PinterestIcon";
//
import MobileHeaderImage from "../images/mobile/image-header.jpg";
import TransformImage from "../images/mobile/image-transform.jpg";
import StandOutImage from "../images/mobile/image-stand-out.jpg";
import ConeImage from "../images/mobile/image-gallery-cone.jpg";
import OrangeImage from "../images/mobile/image-gallery-orange.jpg";
import MilkBottlesImage from "../images/mobile/image-gallery-milkbottles.jpg";
import SugarImage from "../images/mobile/image-gallery-sugar-cubes.jpg";
import GraphicDesignImage from "../images/mobile/image-graphic-design.jpg";
import PhotographyImage from "../images/mobile/image-photography.jpg";
//
import DesktopHeaderImage from "../images/desktop/image-header.jpg";
import DesktopTransformImage from "../images/desktop/image-transform.jpg";
import DesktopStandOutImage from "../images/desktop/image-stand-out.jpg";
import DesktopConeImage from "../images/desktop/image-gallery-cone.jpg";
import DesktopOrangeImage from "../images/desktop/image-gallery-orange.jpg";
import DesktopMilkBottlesImage from "../images/desktop/image-gallery-milkbottles.jpg";
import DesktopSugarImage from "../images/desktop/image-gallery-sugar-cubes.jpg";
import DesktopGraphicDesignImage from "../images/desktop/image-graphic-design.jpg";
import DesktopPhotographyImage from "../images/desktop/image-photography.jpg";
//
import EmilyAvatar from "../images/image-emily.jpg";
import JennieAvatar from "../images/image-jennie.jpg";
import ThomasAvatar from "../images/image-thomas.jpg";

/*
 *
 *
 *
 */
const AgencyLandingPage = () => (
  <div className="theme-sunnyside-agency bg-default text-default font-default min-h-full text-center">
    <div
      className="bg-center bg-cover h-[536px]"
      style={{ backgroundImage: `url(${MobileHeaderImage})` }}
    >
      {/* NAVIGATION */}
      <header className="flex justify-between p-8 items-center">
        <Logo fill="#fff" />
        <nav className="hidden gap-10 md:flex text-white items-center">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <button className="bg-white text-default font-accent rounded-full uppercase py-3 px-8">
            <a href="#">Contact</a>
          </button>
        </nav>
        <span className="md:hidden">
          <HamburgerIcon />
        </span>
      </header>

      {/* TITLE */}
      <h2 className="font-accent font-black text-white text-4xl uppercase tracking-widest text-center py-16 w-">
        We are creatives
      </h2>

      {/* ARROW */}
      <span className="grid place-content-center">
        <ArrowDownIcon />
      </span>
    </div>

    <div>
      {/* TRANSFORM YOUR BRAND */}
      <div className="flex flex-col md:flex-row-reverse">
        <picture className="w-full md:w-1/2">
          <source srcSet={DesktopTransformImage} media="(min-width:768px)" />
          <img
            src={TransformImage}
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="w-full md:w-1/2 py-12 px-8 md:text-start">
          <h3 className="font-accent text-3xl sh">Transform your brand</h3>
          <p className="text-muted py-6">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="font-accent uppercase tracking-wider text-sm">
            Learn more
          </button>
        </div>
      </div>

      {/* STAND OUT */}
      <div className="flex flex-col md:flex-row md:text-start">
        <picture className="w-full md:w-1/2">
          <source srcSet={DesktopStandOutImage} media="(min-width:768px)" />
          <img
            src={StandOutImage}
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="py-12 px-8 w-full md:w-1/2">
          <h3 className="font-accent text-3xl">
            Stand out to the right audience
          </h3>
          <p className="text-muted py-6">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <button className="font-accent uppercase tracking-wider text-sm">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* GRAPHIC DESIGN */}
        <div
          className="py-12 text-[#25564b] w-full md:w-1/2 bg-cover bg-center h-[560px] flex flex-col justify-end px-4 md:px-12 lg:px-24"
          style={{ backgroundImage: `url(${GraphicDesignImage})` }}
        >
          <h4 className="font-accent text-3xl mb-6">Graphic design</h4>
          <p className="mb-6">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
        {/* PHOTOGRAPHY */}
        <div
          className="py-12 text-[#19536b] w-full md:w-1/2 bg-cover bg-center h-[560px] flex flex-col justify-end px-4 md:px-12 lg:px-24"
          style={{ backgroundImage: `url(${PhotographyImage})` }}
        >
          <h4 className="font-accent text-3xl mb-6">Photography</h4>
          <p className="mb-6">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>

      {/* CLIENT TESTIMONIALS */}
      <div className="py-16 px-4 md:px-12">
        <h4 className="font-accent text-lg uppercase tracking-[4px] text-neutral mb-8">
          Client testimonials
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <span className="grid place-content-center my-4">
              <img
                src={EmilyAvatar}
                className="rounded-full"
                height={64}
                width={64}
              />
            </span>
            <p className="text-muted py-4 leading-7">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className="font-accent text-xl font-black mb-2">Emily R.</p>
            <p className="text-neutral">Marketing Director</p>
          </div>
          <div className="flex flex-col">
            <span className="grid place-content-center my-4">
              <img
                src={ThomasAvatar}
                className="rounded-full"
                height={64}
                width={64}
              />
            </span>
            <p className="text-muted py-4 leading-7">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <p className="font-accent text-xl font-black mb-2">Thomas S.</p>
            <p className="text-neutral">Chief Operating Officer</p>
          </div>
          <div className="flex flex-col">
            <span className="grid place-content-center my-4">
              <img
                src={JennieAvatar}
                className="rounded-full"
                height={64}
                width={64}
              />
            </span>
            <p className="text-muted py-4 leading-7">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p className="font-accent text-xl font-black mb-2">Jennie F.</p>
            <p className="text-neutral">Business Owner</p>
          </div>
        </div>
      </div>
    </div>

    {/* IMAGE GALLERY */}
    <div className="grid grid-cols-2 md:grid-cols-4">
      <picture>
        <source srcSet={DesktopMilkBottlesImage} media="(min-width: 768px)" />
        <img src={MilkBottlesImage} />
      </picture>
      <picture>
        <source srcSet={DesktopOrangeImage} media="(min-width: 768px)" />
        <img src={OrangeImage} />
      </picture>
      <picture>
        <source srcSet={DesktopConeImage} media="(min-width: 768px)" />
        <img src={ConeImage} />
      </picture>
      <picture>
        <source srcSet={DesktopSugarImage} media="(min-width: 768px)" />
        <img src={SugarImage} />
      </picture>
    </div>

    {/* FOOTER */}
    <footer className="py-12 text-[#25564b] bg-[#80cdb8]">
      <span className="flex justify-center">
        <Logo fill={"#25564b"} />
      </span>
      {/* <h5>Sunnyside</h5> */}
      <nav className="flex gap-6 justify-center py-8">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </nav>
      <div className="flex gap-8 justify-center py-8">
        <span>
          <FacebookIcon />
        </span>
        <span>
          <InstagramIcon />
        </span>
        <span>
          <TwitterIcon />
        </span>
        <span>
          <PinterestIcon />
        </span>
      </div>
    </footer>
  </div>
);

export default AgencyLandingPage;
