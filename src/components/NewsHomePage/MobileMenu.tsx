import MenuClosedIcon from "./MenuClosedIcon";

const MobileMenu = () => {
  return (
    <div>
      <div />
      <div className="bg-white py-8 px-4">
        <MenuClosedIcon />
        <ul className="pt-24 grid grid-rows-5 gap-12">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
