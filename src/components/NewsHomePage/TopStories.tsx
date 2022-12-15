import Image1 from "../../images/image-gaming-growth.jpg";
import Image2 from "../../images/image-top-laptops.jpg";
import Image3 from "../../images/image-retro-pcs.jpg";

const TopStories = () => {
  return (
    <div className="my-8">
      <ul className="flex flex-col lg:flex-row gap-6">
        <li className="grid grid-cols-3 gap-4 max-w-sm">
          <img src={Image3} />
          <div className="col-span-2">
            <span className="text-neutral text-2xl font-bold">01</span>
            <h5 className="hover:text-primary hover:cursor-pointer text-base font-bold">
              Reviving Retro PCs
            </h5>
            <p className="text-muted">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </li>
        <li className="grid grid-cols-3 gap-4 max-w-sm">
          <img src={Image2} />
          <div className="col-span-2">
            <span className="text-neutral text-2xl font-bold">02</span>
            <h5 className="hover:text-primary hover:cursor-pointer text-base font-bold">
              Top 10 Laptops of 2022
            </h5>
            <p className="text-muted">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </li>
        <li className="grid grid-cols-3 gap-4 max-w-sm">
          <img src={Image1} />
          <div className="col-span-2">
            <span className="text-neutral text-2xl font-bold">03</span>
            <h5 className="hover:text-primary hover:cursor-pointer text-base font-bold">
              The Growth of Gaming
            </h5>
            <p className="text-muted">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TopStories;
