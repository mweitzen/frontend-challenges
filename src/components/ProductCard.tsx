import MobileProductPic from "../images/image-product-mobile.jpg";
import DesktopProductPic from "../images/image-product-desktop.jpg";

const ProductCard = () => {
  return (
    <article className="md:w-[544px] md:max-w-none max-w-sm bg-card rounded-xl overflow-hidden grid md:grid-cols-2 h-fit">
      <picture>
        <source srcSet={DesktopProductPic} media="(min-width:768px)" />
        <img
          src={MobileProductPic}
          alt="Gabrielle Essence perfume bottle laying flat on a table with green leaves above and below it"
          className="h-full object-cover object-center"
        />
      </picture>
      <div className="p-6 grid gap-4 text-sm font-default">
        <p className="text-muted uppercase tracking-[5px]">Perfume</p>
        <h1 className="text-default text-3xl font-bold font-accent leading-none">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-muted text-sm leading-6">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-4 my-2">
          <p className="text-primary font-bold font-accent text-3xl">$149.99</p>
          <p className="text-sm text-muted line-through">$169.99</p>
        </div>

        <button className="bg-primary active:bg-primary-dark text-white font-bold py-4 rounded-lg flex justify-center gap-2">
          <span>
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
          </span>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
