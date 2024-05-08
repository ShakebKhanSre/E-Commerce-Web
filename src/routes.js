import Shop from "./Pages/Shop/Shop";
import { ShopCategory } from "./Pages/ShopCategory/ShopCategory";
import Login from "./Pages/Login/Login.jsx";
import SignUpScreen from "./Pages/SignUpScreen";
import DetailPage from "./Pages/DetailPage";
import AddNewProduct from "./Pages/AddNewProduct";
import ViewAll from "./Pages/ViewAll";

const mensBannerImage =
  "https://img.freepik.com/premium-psd/simple-horizontal-web-banner-template-new-arrival-promotion_177160-84.jpg";
const womenBannerImage =
  "https://img.freepik.com/free-vector/new-season-banner-template-with-pink-lines_1361-1528.jpg";
const kidsBannerImage =
  "https://img.freepik.com/free-vector/flat-design-minimal-boutique-template-design_23-2149319754.jpg";

export const NextRoutes = [
  { path: "/", element: <Shop /> },
  {
    path: "/electronics",
    element: (
      <ShopCategory
        category="electronics"
        bannerImageUrl={mensBannerImage}
        color={"#808080"}
      />
    ),
  },
  {
    path: "/jewelery",
    element: (
      <ShopCategory
        category="jewelery"
        bannerImageUrl={womenBannerImage}
        color={"pink"}
      />
    ),
  },
  {
    path: "/men's clothing",
    element: (
      <ShopCategory
        category="men's clothing"
        bannerImageUrl={kidsBannerImage}
        color={"#f0e68c"}
      />
    ),
  },
  {
    path: "/women's clothing",
    element: (
      <ShopCategory
        category="women's clothing"
        bannerImageUrl={kidsBannerImage}
        color={"#f0e68c"}
      />
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/product/:id", element: <DetailPage /> },
  { path: "/sign-up", element: <SignUpScreen /> },
  { path: "/AddNewProduct/:type/:productId?", element: <AddNewProduct /> },
  { path: "/ViewAll", element: <ViewAll /> },
];
