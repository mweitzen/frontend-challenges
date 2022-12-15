import HeroIllustration from "./HeroIllustration";
import MusicIcon from "./MusicIcon";

const OrderSummary = () => {
  return (
    <div className="max-w-xs md:max-w-sm bg-white rounded-2xl overflow-hidden">
      <picture>
        <HeroIllustration />
      </picture>
      <div className="grid gap-6 p-6 text-center">
        <h2 className="text-default font-black text-xl">Order Summary</h2>
        <p className="text-muted">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex rounded-lg bg-neutral gap-4 p-4 items-center">
          <span>
            <MusicIcon />
          </span>
          <span className="flex-1 text-sm text-start">
            <p className="font-bold text-default">Annual Plan</p>
            <p className="text-muted">$59.99/year</p>
          </span>
          <button>
            <span className="text-indigo-700 underline font-bold text-sm">
              Change
            </span>
          </button>
        </div>
        <button className="bg-primary text-white font-black text-sm rounded-xl shadow-2xl py-4">
          Proceed to Payment
        </button>
        <button className="text-sm font-black text-muted">Cancel Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
