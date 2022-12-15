const NewStories = () => {
  return (
    <div className="bg-card p-4 w-full">
      <h3 className="text-secondary text-2xl font-bold mb-6">New</h3>

      <div>
        <h4 className="text-white hover:text-secondary hover:cursor-pointer font-bold leading-8">
          Hydrogen VS Electric Cars
        </h4>
        <p className="text-gray-400 text-[14px]">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <div className="border-b border-gray-500 my-6" />
      <div>
        <h4 className="text-white font-bold leading-8  hover:text-secondary hover:cursor-pointer">
          The Downsides of AI Artistry
        </h4>
        <p className="text-gray-400 text-[14px]">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className="border-b border-gray-500 my-6" />

      <div>
        <h4 className="text-white font-bold leading-8  hover:text-secondary hover:cursor-pointer">
          Is VC Funding Drying Up?
        </h4>
        <p className="text-gray-400 text-[14px]">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default NewStories;
