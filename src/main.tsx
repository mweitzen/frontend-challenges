import "./styles/index.css";
//
import React from "react";
import ReactDOM from "react-dom/client";
//
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
//
import ProductCardDemo from "./scenes/ProductCardDemo";
import InteractiveRatingDemo from "./scenes/InteractiveRatingDemo";
import NewsHomePage from "./scenes/NewsHomePage";
import OrderSummaryDemo from "./scenes/OrderSummaryDemo";
import BaseApparelPage from "./scenes/BaseApparelPage";
import AgencyLandingPage from "./scenes/AgencyLandingPage";

/*
 *
 * ROUTES
 *
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="grid gap-6 p-8">
        <Link
          to="/product-card"
          className="py-4 px-8 text-center border border-gray-200 shadow-md shadow-slate-300 rounded-lg"
        >
          Product Card
        </Link>
        <Link
          to="/rating"
          className="py-4 px-8 text-center border border-gray-200 shadow-md shadow-slate-300 rounded-lg"
        >
          Interactive Rating
        </Link>
        <Link
          to="/order-summary"
          className="py-4 px-8 text-center border border-gray-200 shadow-md shadow-slate-300 rounded-lg"
        >
          Order Summary
        </Link>
        <Link
          to="/base-apparel"
          className="py-4 px-8 text-center border border-gray-200 shadow-md shadow-slate-300 rounded-lg"
        >
          Base Apparel
        </Link>
        <Link
          to="/news"
          className="py-4 px-8 text-center border border-gray-200 shadow-md shadow-slate-300 rounded-lg"
        >
          News Home Page
        </Link>
        <Link
          to="/agency-landing-page"
          className="py-4 px-8 text-center border border-gray-200 shadow-md shadow-slate-300 rounded-lg"
        >
          Agency Landing Page
        </Link>
      </div>
    ),
  },
  {
    path: "/product-card",
    element: <ProductCardDemo />,
  },
  {
    path: "/rating",
    element: <InteractiveRatingDemo />,
  },
  {
    path: "/order-summary",
    element: <OrderSummaryDemo />,
  },
  {
    path: "/base-apparel",
    element: <BaseApparelPage />,
  },
  {
    path: "/news",
    element: <NewsHomePage />,
  },
  {
    path: "/agency-landing-page",
    element: <AgencyLandingPage />,
  },
]);

/*
 *
 * APP RENDER
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
