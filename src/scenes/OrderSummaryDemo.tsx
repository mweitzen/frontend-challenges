import OrderSummary from "../components/OrderSummary";
import background from "../images/pattern-background-desktop.svg";

const OrderSummaryDemo = () => {
  return (
    <div
      className="theme-order-summary min-h-full bg-default bg-no-repeat grid place-content-center font-default"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <OrderSummary />
    </div>
  );
};

export default OrderSummaryDemo;
